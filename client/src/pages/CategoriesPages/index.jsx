import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import api from "../../constant/api";
import { getImage } from "../../constant";

const Categories = () => {
  const [categories, setCategories] = useState([]);
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
  console.log({ categories });
  return (
    <div>
      <Helmet>
        <title>ArenaGYM - Kategoriler</title>
      </Helmet>
    </div>
  );
};

export { Categories };
