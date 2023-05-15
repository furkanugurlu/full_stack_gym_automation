import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BranchesValidation } from "../../validations";
import { Input, SelectBox } from "../../components/FormItems";
import { Loader } from "../../components";
import api from "../../constant/api";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";

const CreateBranches = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getRequest = async () => {
      const res = await api.get("category/read");
      const categories = res.data.map((x) => {
        return { value: x?.kategoriAdi, id: x?.kategoriID };
      });
      setCategories(categories);
    };
    getRequest();
  }, []);

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>ArenaGYM - Branşlar</title>
      </Helmet>
      <h1 className="font-mono text-4xl text-[#2D3748]  mb-4 font-bold">
        - Branş Ekle -
      </h1>
      <Formik
        initialValues={{ bransAdi: "", kategoriID: "" }}
        validationSchema={BranchesValidation}
        onSubmit={(values, actions) => {
          const params = {
            bransAdi: values.bransAdi,
            kategoriID: categories?.find((x) => x.value == values.kategoriID)
              .id,
          };
          api
            .post("branch/create", params)
            .then((res) => {
              actions.setSubmitting(false);
              navigate("/branches");
            })
            .catch((err) => {});
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <Input label="Branş İsmi" name="bransAdi" />
            <SelectBox
              label="Kategori Seç"
              name="kategoriID"
              options={categories}
            />

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
                onClick={() => navigate("/branches")}
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

export { CreateBranches };
