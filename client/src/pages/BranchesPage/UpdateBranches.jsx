import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BranchesValidation } from "../../validations";
import { Input, SelectBox } from "../../components/FormItems";
import { Loader } from "../../components";
import api from "../../constant/api";
import { Formik, Form } from "formik";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBranches = () => {
  const navigate = useNavigate();
  const { id } = useParams();
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

  const [branch, setBranch] = useState([]);
  useEffect(() => {
    const getRequest = async () => {
      const res = await api.get(`/branch/read/${id}`);
      setBranch(res.data[0]);
    };

    getRequest();
  }, []);

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>ArenaGYM - Branşlar</title>
      </Helmet>
      <h1 className="font-mono text-4xl text-[#2D3748]  mb-4 font-bold">
        - Branş Güncelle -
      </h1>
      <Formik
        initialValues={{
          bransAdi: branch?.bransAdi || "",
          kategoriID:
            categories?.find((x) => x?.id == branch?.kategoriID)?.value || "",
        }}
        validationSchema={BranchesValidation}
        enableReinitialize
        onSubmit={(values, actions) => {
          const params = {
            bransAdi: values?.bransAdi,
            kategoriID: categories?.find((x) => x.value == values.kategoriID)
              .id,
            id,
          };
          if (
            branch?.bransAdi != values.bransAdi ||
            categories?.find((x) => x?.id == branch?.kategoriID)?.value !=
              values.kategoriID
          ) {
            api
              .put("/branch/update", params)
              .then((res) => {
                actions.setSubmitting(false);
                navigate("/branches");
              })
              .catch((err) => {});
          } else {
            alert("Herhangi bir veri girilmedi");
            actions.setSubmitting(false);
          }
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <Input label="Branş İsmi" name="bransAdi" />
            <SelectBox
              label={`Kategori Seç - Önceki seçim:  ${
                categories?.find((x) => x?.id == branch?.kategoriID)?.value
              }`}
              name="kategoriID"
              options={categories}
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

export { UpdateBranches };
