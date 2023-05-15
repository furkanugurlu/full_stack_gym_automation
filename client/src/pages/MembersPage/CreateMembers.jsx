import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Form, Formik } from "formik";
import { Loader } from "../../components";
import api from "../../constant/api";
import { MemberValidation } from "../../validations";
import { Input, SelectBox } from "../../components/FormItems";
import { useNavigate } from "react-router-dom";

const CreateMembers = () => {
  const [packages, setPackages] = useState([]);
  const [coach, setCoach] = useState([]);
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

    getRequest();
    getCoach();
  }, []);

  const navigate = useNavigate();
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>ArenaGYM - Kategori Ekleme</title>
      </Helmet>
      <h1 className="font-mono text-4xl mb-10 text-[#2D3748] font-bold">
        - Üye Ekle -
      </h1>
      <Formik
        initialValues={{
          ad: "",
          soyad: "",
          mail: "",
          telNO: "",
          dogumTarihi: "",
          adres: "",
          cinsiyet: "",
          tcNO: "",
          paket: "",
          ant: "",
        }}
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
            .post("member/create", params)
            .then((res) => {
              console.log(res);
              values.paket &&
                api.post("member/add-package", packageParams).then((res) => {});
              values?.ant &&
                api.post("member/add-coach", coachParams).then((res) => {});

              actions.setSubmitting(false);
              navigate("/members");
            })
            .catch((err) => {
              console.log(err);
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
              label="Cinsiyet"
              name="cinsiyet"
              options={[{ value: "Erkek" }, { value: "Kadın" }]}
            />
            <SelectBox label="Paket seç" name="paket" options={packages} />
            <SelectBox label="Antrenör seç" name="ant" options={coach} />

            <div className="flex justify-end items-center">
              <button
                type="submit"
                className="flex justify-center items-center text-white h-10  bg-blue-700  hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              >
                {isSubmitting ? <Loader /> : "Ekle"}
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

export { CreateMembers };
