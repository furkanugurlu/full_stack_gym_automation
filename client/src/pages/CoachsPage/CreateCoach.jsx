import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Form, Formik } from "formik";
import { Loader } from "../../components";
import api from "../../constant/api";
import { CoachValidation } from "../../validations";
import { Input, SelectBox } from "../../components/FormItems";
import { useNavigate } from "react-router-dom";

const CreateCoach = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>ArenaGYM - Antrenör Ekleme</title>
      </Helmet>
      <h1 className="font-mono text-4xl mb-10 text-[#2D3748] font-bold">
        - Antrenör Ekle -
      </h1>
      <Formik
        initialValues={{
          adi: "",
          soyadi: "",
          mail: "",
          telNo: "",
          adres: "",
          dogumTarihi: "",
          tcNo: "",
          sifre: "",
          confirmPassword: "",
        }}
        validationSchema={CoachValidation}
        onSubmit={(values, actions) => {
          delete values.confirmPassword;

          api
            .post("coach/create", values)
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
            <Input label="Şifre" name="sifre" />
            <Input label="Şifre Doğrula" name="confirmPassword" />

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

export { CreateCoach };
