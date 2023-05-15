import React, { useEffect, useState } from "react";
import api from "../../constant/api";
import { useParams } from "react-router-dom";
import { CategoriesItemList, Loader } from "../../components";
import { getImage } from "../../constant/index";

const CategoriesDetail = () => {
  const { id } = useParams();
  const [onlyCategory, setOnylCategories] = useState({});
  const [loading, setLaoding] = useState(false);
  useEffect(() => {
    setLaoding(true);
    api
      .get(`category/read/${id}`)
      .then((res) => {
        console.log(res);
        setLaoding(false);
        const newData = res?.data?.map((c) => {
          return {
            branslar: c?.branslar
              ?.filter(
                (cf, i, self) =>
                  i == self?.findIndex((t) => t.bransId == cf.bransId)
              )
              ?.map((b, i) => {
                return { img: getImage(i + 2, "gym-branch"), ...b };
              }),
            kategoriAdi: c.kategoriAdi,
            uyelikpaketler: c?.uyelikpaketler
              ?.filter(
                (cf, i, self) =>
                  i == self?.findIndex((t) => t.paketID == cf.paketID)
              )
              ?.map((u, i) => {
                return { img: getImage(i, "gym-branch"), ...u };
              }),
          };
        });

        setOnylCategories(newData);
      })
      .catch((err) => {
        setLaoding(false);
      });
  }, []);

  return (
    <div className="">
      {loading ? (
        <Loader detail />
      ) : (
        <div className="container  flex flex-col md:container md:mx-auto">
          <h1 className="font-mono text-4xl text-[#2D3748] self-center">
            {onlyCategory[0]?.kategoriAdi?.toUpperCase()}
          </h1>
          {!onlyCategory[0]?.branslar && !onlyCategory[0]?.uyelikpaketler ? (
            <h1 className="font-mono text-4xl text-[#2D3748] mt-6 self-center">
              Branş veya Paket eklenmemiştir
            </h1>
          ) : null}
          {onlyCategory[0]?.branslar && (
            <CategoriesItemList
              secondary
              title="Branşlar"
              data={onlyCategory[0]?.branslar}
            />
          )}
          {onlyCategory[0]?.uyelikpaketler && (
            <CategoriesItemList
              secondary
              title="Paketler"
              data={onlyCategory[0]?.uyelikpaketler}
            />
          )}
        </div>
      )}
    </div>
  );
};

export { CategoriesDetail };
