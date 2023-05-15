import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Form, Formik } from "formik";
import { Loader } from "../../components";
import api from "../../constant/api";
import { MemberValidation } from "../../validations";
import { Input, SelectBox } from "../../components/FormItems";
import { useNavigate, useParams } from "react-router-dom";

const UpdateMembers = () => {
  const { id } = useParams();
  const [packages, setPackages] = useState([]);
  const [coach, setCoach] = useState([]);
  const [onlyMember, setOnlyMember] = useState({});
  console.log(packages);
  console.log(coach);
  console.log(onlyMember);
  useEffect(() => {
    const getRequest = async () => {
      const res = await api.get("package/read");
      const paketList = res.data.map((x) => {
        return { value: x.paketAdi, id: x.paketID };
      });
      setPackages(paketList);
    };
    const getCoach = async () => {
      const res = await api.get("coach/read");
      const coachList = res.data.map((x) => {
        return { value: x.adi, id: x.tcNo };
      });
      setCoach(coachList);
    };

    const getMemberRead = async () => {
      const res = await api.get(`member/read/${id}`);
      setOnlyMember(res.data[0]);
    };

    getMemberRead();
    getRequest();
    getCoach();
  }, []);

  const navigate = useNavigate();
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>ArenaGYM - Üye Güncelleme</title>
      </Helmet>
      <h1 className="font-mono text-4xl mb-10 text-[#2D3748] font-bold">
        - Üye Güncelle -
      </h1>
      <Formik
        initialValues={{
          ad: onlyMember?.ad || "",
          soyad: onlyMember?.soyad || "",
          mail: onlyMember?.mail || "",
          telNO: onlyMember?.telNO || "",
          dogumTarihi: onlyMember?.dogumTarihi?.substring(0, 10) || "",
          adres: onlyMember?.adres || "",
          cinsiyet: onlyMember?.cinsiyet || "",
          tcNO: onlyMember?.tcNO || "",
          paket: "",
          ant: "",
        }}
        enableReinitialize
        validationSchema={MemberValidation}
        onSubmit={(values, actions) => {
          const coachParams = {
            uyeTcNo: values.tcNO,
            antTcNo: coach?.find((x) => x?.value == values?.ant)?.id,
          };
          const packageParams = {
            tcNO: values?.tcNO,
            paketID: packages.find((f) => f.value == values.paket)?.id,
          };

          const params = {
            ad: values.ad,
            soyad: values.soyad,
            tcNO: values.tcNO,
            cinsiyet: values.cinsiyet,
            adres: values.adres,
            mail: values.mail,
            telNO: values.telNO,
            dogumTarihi: values.dogumTarihi,
          };

          api
            .put("member/update", params)
            .then((res) => {
              values.paket &&
                api
                  .put("member/update-package", packageParams)
                  .then((res) => {});
              values?.ant &&
                api.put("member/update-coach", coachParams).then((res) => {});

              actions.setSubmitting(false);
              navigate("/members");
            })
            .catch(() => {
              actions.setSubmitting(false);
            });
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <Input label="Ad" name="ad" />
            <Input label="Soyad" name="soyad" />
            <Input label="Email" name="mail" />
            <Input label="Telefon Numarası" name="telNO" />
            <Input label="TC Kimlik Numarası" name="tcNO" />
            <Input label="Doğum Tarihi" name="dogumTarihi" />
            <Input label="Adres" name="adres" />
            <SelectBox
              label={`Cinsiyet - Önceki seçim: ${values.cinsiyet}`}
              name="cinsiyet"
              options={[{ value: "Erkek" }, { value: "Kadın" }]}
            />
            <SelectBox
              label={`Paket seç - Önceki seçim: ${
                packages?.find((x) => x.id == onlyMember?.paketID)?.value
              }`}
              name="paket"
              options={packages}
            />
            <SelectBox
              label={`Antrenör seç - Önceki seçim: ${
                coach?.find((x) => x.id == onlyMember?.antTcNo)?.value
              }`}
              name="ant"
              options={coach}
            />

            <div className="flex justify-end items-center">
              <button
                type="submit"
                className="flex justify-center items-center text-white h-10  bg-blue-700  hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              >
                {isSubmitting ? <Loader /> : "Güncelle"}
              </button>
              <button
                type="reset"
                className="flex justify-center items-center text-white h-10  bg-yellow-500  hover:bg-yellow-600 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              >
                Sıfırla
              </button>
              <button
                onClick={() => navigate("/members")}
                className="flex justify-center items-center text-white h-10  bg-red-500  hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              >
                Geri
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { UpdateMembers };
