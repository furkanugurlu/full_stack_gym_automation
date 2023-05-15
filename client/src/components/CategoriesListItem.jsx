import React from "react";
import { CustomCard } from "./CustomCard";

const CategoriesItemList = ({
  data,
  secondary,
  detail,
  remove,
  removeHandle,
  update,
  updateHandle,
  branches,
  packagePage,
  title,
}) => {
  return (
    <div className="mx-auto mt-14 pb-16">
      {data?.length == 0 && (
        <h1 className="text-xl font-mono text-red-600">
          Herhangi bir kayıt bulunamadı
        </h1>
      )}
      {title && (
        <h1 className="font-mono text-4xl text-[#2D3748]  mb-4 font-bold">
          - {title} -
        </h1>
      )}
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 grid-cols-1 gap-x-2 gap-y-5">
        {data?.map((item, i) => {
          return (
            <CustomCard
              updateHandle={(id) => updateHandle(id)}
              update={update}
              removeHandle={(id) => removeHandle(id)}
              remove={remove}
              detail={detail}
              key={i}
              id={
                branches
                  ? item?.bransID
                  : packagePage
                  ? item?.paketID
                  : item?.kategoriID || item?.esyaID
              }
              title={
                item?.kategoriAdi ||
                item?.esyaAdi ||
                item?.bransAdi ||
                item?.paketAdi
              }
              email={item?.email}
              url={item?.img}
              day={item?.gun}
              price={item?.fiyat || item?.ucret}
              date={item?.alinmaTarihi || ""}
              marka={item?.marka || ""}
              isMore={!secondary}
            />
          );
        })}
      </div>
    </div>
  );
};

export { CategoriesItemList };
