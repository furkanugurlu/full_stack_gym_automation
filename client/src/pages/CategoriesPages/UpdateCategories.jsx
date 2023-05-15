import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { CategoriesValidation } from "../../validations";
import { Input } from "../../components/FormItems";
import { Helmet } from "react-helmet";
import { Loader } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../constant/api";

const UpdateCategories = () => {
  const navigation = useNavigate();
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getTrainer = async () => {
      const res = await api.get(`category/read/${id}`);
      setCategories(res.data[0]);
    };

    getTrainer();
  }, []);

  return (
    <div className="container mx-auto h-screen">
      <Helmet>
        <title>ArenaGYM - Kategori Güncelle</title>
      </Helmet>
      <h1 className="font-mono text-4xl mb-10 text-[#2D3748] font-bold">
        - Kategori Güncelle -
      </h1>
      <Formik
        initialValues={{ kategoriAdi: categories?.kategoriAdi || "" }}
        validationSchema={CategoriesValidation}
        enableReinitialize
        onSubmit={(values, actions) => {
          if (values?.kategoriAdi !== categories?.kategoriAdi) {
            api
              .put("category/update", { ...values, kategoriID: id })
              .then((res) => {
                actions.setSubmitting(false);
                navigation("/categories");
              })
              .catch((err) => {});
          } else {
            alert("Herhangibir değişiklik yapmadınız.");
            actions.setSubmitting(false);
          }
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <Input label="Kategori Adi" name="kategoriAdi" />
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
                onClick={() => navigation("/categories")}
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

export { UpdateCategories };
