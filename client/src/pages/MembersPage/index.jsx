import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { getImage } from "../../constant/index";
import api from "../../constant/api";
import { ProfilCard } from "../../components/ProfilCard";
import { PageTitle } from "../../components";
import { useNavigate } from "react-router-dom";

const Members = () => {
  const navigation = useNavigate();
  const [members, setMembers] = useState([]);

  const [coach, setCoach] = useState([]);
  const [pack, setPack] = useState([]);
  useEffect(() => {
    const getRequest = async () => {
      const res = await api.get("member/read");
      const newData = res.data.map((member, i) => {
        return { img: getImage(i, "avatar"), ...member };
      });
      setMembers(newData);
    };

    const getPackage = async () => {
      const res = await api.get("package/read");
      setPack(res.data);
    };
    const getCoach = async () => {
      const res = await api.get("coach/read");
      setCoach(res.data);
    };
    getCoach();
    getPackage();
    getRequest();
  }, []);

  const removeHandle = (id) => {
    api.delete(`member/remove/${id}`).then((res) => {
      const newCat = members?.filter((x) => x.tcNO !== id);
      setMembers(newCat);
    });
  };

  const updateHandle = (id) => {
    navigation(`/members/update-member/${id}`);
  };

  return (
    <div className="container flex flex-col md:container md:mx-auto">
      <Helmet>
        <title>ArenaGYM - Üyeler</title>
      </Helmet>
      <PageTitle title="Üyeler" link="/members/create-member" />

      <div className="mx-auto mt-14 pb-16">
        {members?.length == 0 && <h1>Herhangi bir kayıt bulunamadı</h1>}

        <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 grid-cols-1 gap-x-2 gap-y-5">
          {members.map((item) => {
            return (
              <ProfilCard
                removeHandle={(id) => removeHandle(id)}
                updateHandle={(id) => updateHandle(id)}
                dob={new Date(item?.dogumTarihi).toLocaleDateString()}
                dor={new Date(item?.kayitTarihi).toLocaleDateString()}
                key={item.tcNO}
                id={item?.tcNO}
                name={`${item?.ad} ${item?.soyad}`}
                email={item?.mail}
                gender={item?.cinsiyet}
                url={item?.img}
                phoneNo={item?.telNO}
                coach={
                  item?.antTcNo == null
                    ? "-"
                    : `${coach?.find((x) => x.tcNo == item.antTcNo)?.adi} ${
                        coach?.find((x) => x.tcNo == item.antTcNo)?.soyadi
                      }`
                }
                pack={
                  item?.paketID == null
                    ? "-"
                    : pack.find((x) => x.paketID == item?.paketID)?.paketAdi
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Members };
