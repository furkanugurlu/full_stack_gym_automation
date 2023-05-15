import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import api from "../../constant/api";
import { getImage } from "../../constant";
import { CategoriesItemList, PageTitle } from "../../components";
import { Link, useNavigate } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    const getTrainer = async () => {
      const res = await api.get("category/read");
      const newData = res.data.map((cate, i) => {
        return { img: getImage(i, "gym-categories"), ...cate };
      });
      setCategories(newData);
    };

    getTrainer();
  }, []);

  const removeHandle = (id) => {
    api.delete(`category/remove/${id}`).then((res) => {
      const newCat = categories.filter((x) => x.kategoriID !== id);
      setCategories(newCat);
    });
  };

  const updateHandle = (id) => {
    navigation(`/categories/update-categories/${id}`);
  };

  return (
    <div className="container flex flex-col md:container md:mx-auto">
      <Helmet>
        <title>ArenaGYM - Kategoriler</title>
      </Helmet>

      <PageTitle title="Kategoriler" link="/categories/create-categories" />

      <CategoriesItemList
        update
        removeHandle={(id) => removeHandle(id)}
        updateHandle={(id) => updateHandle(id)}
        remove
        data={categories}
      />
    </div>
  );
};

export { Categories };
