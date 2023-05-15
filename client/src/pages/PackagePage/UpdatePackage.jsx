import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { PackageValidation } from "../../validations";
import { Input, SelectBox } from "../../components/FormItems";
import { Loader } from "../../components";
import api from "../../constant/api";
import { Formik, Form } from "formik";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePackage = () => {
  const { id } = useParams();
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

  const [pack, setPack] = useState([]);
  useEffect(() => {
    const getPackage = async () => {
      const res = await api.get(`/package/read/${id}`);
      setPack(res.data[0]);
    };

    getPackage();
  }, []);

  console.log({ pack });
  return (
    <div className="container mx-auto ">
      <Helmet>
        <title>ArenaGYM - Eşyalar</title>
      </Helmet>
      <h1 className="font-mono text-4xl text-[#2D3748]  mb-4 font-bold">
        - Paket Güncelle -
      </h1>
      <Formik
        initialValues={{
          kategoriID:
            categories?.find((x) => x?.id == pack?.kategoriID)?.value || "",
          paketAdi: pack?.paketAdi || "",
          gun: pack?.gun || "",
          ucret: pack?.ucret || undefined,
        }}
        enableReinitialize
        validationSchema={PackageValidation}
        onSubmit={(values, actions) => {
          const params = {
            id,
            paketAdi: values.paketAdi,
            gun: values.gun,
            ucret: values.ucret,
            kategoriID: categories?.find((x) => x.value == values.kategoriID)
              .id,
          };
          if (
            pack.paketAdi != values.paketAdi ||
            pack.gun != values.gun ||
            pack.ucret != values.ucret ||
            categories?.find((x) => x?.id == pack?.kategoriID)?.value !=
              values.kategoriID
          ) {
            api
              .put("package/update", params)
              .then((res) => {
                actions.setSubmitting(false);
                navigate("/package");
              })
              .catch((err) => {});
          } else {
            alert("Herhangi bir değişiklik yok");
            actions.setSubmitting(false);
          }
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <Input label="Adı" name="paketAdi" />
            <Input label="Gün" name="gun" />
            <Input label="Ücret" name="ucret" />
            <SelectBox
              label={`Kategori Seç - Önceki seçim:  ${
                categories?.find((x) => x?.id == pack?.kategoriID)?.value
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
                onClick={() => navigate("/package")}
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

export { UpdatePackage };
