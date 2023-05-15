import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { ToolsValidation } from "../../validations";
import { Input } from "../../components/FormItems";
import { Loader } from "../../components";
import api from "../../constant/api";
import { Formik, Form } from "formik";
import { useNavigate, useParams } from "react-router-dom";

const UpdateTools = () => {
  const navigation = useNavigate();
  const { id } = useParams();
  const [tools, setTools] = useState([]);
  useEffect(() => {
    const getTrainer = async () => {
      const res = await api.get(`/furniture/read/${id}`);
      setTools(res.data[0]);
    };

    getTrainer();
  }, []);

  return (
    <div className="container mx-auto h-screen">
      <Helmet>
        <title>ArenaGYM - Eşyalar</title>
      </Helmet>
      <h1 className="font-mono text-4xl text-[#2D3748]  mb-4 font-bold">
        - Eşya Ekle -
      </h1>
      <Formik
        initialValues={{
          esyaAdi: tools?.esyaAdi || "",
          seriNo: tools?.seriNo || "",
          marka: tools?.marka || "",
          fiyat: tools?.fiyat || "",
        }}
        validationSchema={ToolsValidation}
        enableReinitialize
        onSubmit={(values, actions) => {
          if (
            values?.esyaAdi != tools?.esyaAdi ||
            values?.marka != tools?.marka ||
            values?.seriNo != tools?.seriNo ||
            values?.fiyat != tools?.fiyat
          ) {
            const query = { ...values, esyaID: id };
            api
              .put("furniture/update", query)
              .then((res) => {
                actions.setSubmitting(false);
                navigation("/tools");
              })
              .catch((err) => {});
          } else {
            actions.setSubmitting(false);
            alert("Herhangi bir değişiklik yapmadınız.");
          }
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <Input label="Adı" name="esyaAdi" />
            <Input label="Seri No" name="seriNo" />
            <Input label="Marka" name="marka" />
            <Input label="Fiyat" name="fiyat" />

            <div className="flex justify-end items-center ">
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
                onClick={() => navigation("/tools")}
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

export { UpdateTools };
