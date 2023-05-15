import React, { useEffect, useState } from "react";
import api from "../../constant/api";
import { getImage } from "../../constant/index";
import { useNavigate } from "react-router-dom";
import { CategoriesItemList, PageTitle } from "../../components";
import { Helmet } from "react-helmet";

const Package = () => {
  const [packages, setPackage] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    const getRequest = async () => {
      const res = await api.get("package/read");
      const newData = res.data.map((tool, i) => {
        return { img: getImage(i, "sports-package"), ...tool };
      });
      setPackage(newData);
    };
    getRequest();
  }, []);

  const removeHandle = (id) => {
    api.delete(`package/remove/${id}`).then((res) => {
      const newCat = packages.filter((x) => x.paketID !== id);
      setPackage(newCat);
    });
  };

  const updateHandle = (id) => {
    navigation(`/package/update-package/${id}`);
  };
  return (
    <div className="container flex flex-col md:container md:mx-auto">
      <Helmet>
        <title>ArenaGYM - Paketler</title>
      </Helmet>
      <PageTitle title="Paketler" link="/package/create-package" />

      <CategoriesItemList
        remove
        update
        secondary
        packagePage
        data={packages}
        removeHandle={(id) => removeHandle(id)}
        updateHandle={(id) => updateHandle(id)}
      />
    </div>
  );
};

export { Package };
