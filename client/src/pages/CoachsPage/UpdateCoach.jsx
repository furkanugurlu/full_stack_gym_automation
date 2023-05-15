import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Form, Formik } from "formik";
import { Loader } from "../../components";
import api from "../../constant/api";
import { CoachValidation } from "../../validations";
import { Input, SelectBox } from "../../components/FormItems";
import { useNavigate, useParams } from "react-router-dom";

const UpdateCoach = () => {
  const { id } = useParams();
  const [coach, setCoach] = useState({});
  useEffect(() => {
    const getCoach = async () => {
      const res = await api.get(`coach/read/${id}`);
      setCoach(res.data[0]);
    };

    getCoach();
  }, []);

  console.log(coach);

  const navigate = useNavigate();
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>ArenaGYM - Antrenör Güncelleme</title>
      </Helmet>
      <h1 className="font-mono text-4xl mb-10 text-[#2D3748] font-bold">
        - Antrenör Güncelle -
      </h1>
      <Formik
        initialValues={{
          adi: coach.adi || "",
          soyadi: coach.soyadi || "",
          mail: coach.mail || "",
          telNo: coach.telNo || "",
          adres: coach.adres || "",
          dogumTarihi: coach?.dogumTarihi?.substring(0, 10) || "",
          tcNo: coach.tcNo || "",
          sifre: coach.sifre || "",
          confirmPassword: coach.sifre || "",
        }}
        enableReinitialize
        validationSchema={CoachValidation}
        onSubmit={(values, actions) => {
          delete values.confirmPassword;
          const params = { id, ...values };
          console.log(params);
          api
            .put("coach/update", params)
            .then((res) => {
              actions.setSubmitting(false);
              navigate("/coaches");
            })
            .catch((err) => {
              console.log(err);
              actions.setSubmitting(false);
            });
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <Input label="Ad" name="adi" />
            <Input label="Soyad" name="soyadi" />
            <Input label="Email" name="mail" />
            <Input label="Telefon Numarası" name="telNo" />
            <Input label="TC Kimlik Numarası" name="tcNo" />
            <Input label="Doğum Tarihi" name="dogumTarihi" />
            <Input label="Adres" name="adres" />
            <Input type="password" label="Şifre" name="sifre" />
            <Input
              type="password"
              label="Şifre Doğrula"
              name="confirmPassword"
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
                onClick={() => navigate("/coaches")}
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

export { UpdateCoach };
