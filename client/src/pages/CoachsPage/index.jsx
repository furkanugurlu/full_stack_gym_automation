import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { getImage } from "../../constant";
import api from "../../constant/api";
import { PageTitle, ProfilCard } from "../../components";

const Coaches = () => {
  const [coach, setCoach] = useState([]);
  const navigation = useNavigate();
  console.log(coach);
  useEffect(() => {
    const getRequest = async () => {
      const res = await api.get("coach/read");
      const newData = res.data.map((tool, i) => {
        return { img: getImage(i, "sports-coach"), ...tool };
      });
      setCoach(newData);
    };
    getRequest();
  }, []);

  const removeHandle = (id) => {
    api.delete(`/coach/remove/${id}`).then((res) => {
      const newCat = coach.filter((x) => x.tcNo !== id);
      setCoach(newCat);
    });
  };

  const updateHandle = (id) => {
    navigation(`/coaches/update-coaches/${id}`);
  };
  return (
    <div className="container flex flex-col md:container md:mx-auto">
      <Helmet>
        <title>ArenaGYM - Antrenörler</title>
      </Helmet>
      <PageTitle title="Antrenörler" link="/coaches/create-coaches" />

      <div className="mx-auto mt-14 pb-16">
        {coach.length == 0 && <h1>Herhangi bir kayıt bulunamadı</h1>}
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 grid-cols-1 gap-x-2 gap-y-5">
          {coach.map((item) => {
            return (
              <ProfilCard
                key={item.tcNo}
                removeHandle={() => removeHandle(item.tcNo)}
                updateHandle={() => updateHandle(item.tcNo)}
                dob={new Date(item?.dogumTarihi).toLocaleDateString()}
                dor={new Date(item?.kayitTarihi).toLocaleDateString()}
                id={item?.tcNo}
                name={`${item?.adi} ${item?.soyadi}`}
                email={item?.mail}
                url={item?.img}
                phoneNo={item?.telNo}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Coaches };
