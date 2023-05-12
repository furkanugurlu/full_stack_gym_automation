import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import api from "../constant/api";
import { CustomCard } from "../components";
import { getImage } from "../constant";

const Home = () => {
  const [tools, setTools] = useState([]);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getFitnessPackage = async () => {
      const res = await api.get("furniture/read");
      const newData = res.data.map((tool, i) => {
        return { img: getImage(i, "sports-equipment"), ...tool };
      });
      setTools(newData);
    };

    const getTrainer = async () => {
      const res = await api.get("category/read");
      const newData = res.data.map((cate, i) => {
        return { img: getImage(i, "gym-categories"), ...cate };
      });
      setCategories(newData);
    };

    getFitnessPackage();
    getTrainer();
  }, []);

  return (
    <div className="container flex flex-col md:container md:mx-auto">
      <Helmet>
        <title>ArenaGYM - Ana Sayfa</title>
      </Helmet>

      {categories?.length != 0 && (
        <div className="mx-auto">
          <h1 className="font-mono text-4xl text-[#2D3748]  mb-4 font-bold">
            - Kategoriler -
          </h1>
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 grid-cols-1 gap-x-2 gap-y-5">
            {categories?.map((item, i) => {
              return (
                <CustomCard
                  key={i}
                  title={item?.kategoriAdi}
                  email={item?.email}
                  url={item?.img}
                  isMore
                />
              );
            })}
          </div>
        </div>
      )}

      {tools?.length != 0 && (
        <div className="mx-auto mt-14 pb-16">
          <h1 className="font-mono text-4xl text-[#2D3748]  mb-4 font-bold">
            - Sport Aletleri -
          </h1>
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 grid-cols-1 gap-x-2 gap-y-5">
            {tools?.map((item, i) => {
              return (
                <CustomCard
                  key={i}
                  title={item?.esyaAdi}
                  price={item?.fiyat}
                  date={item?.alinmaTarihi}
                  marka={item?.marka}
                  url={item?.img}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export { Home };
