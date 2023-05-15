import React from "react";
import { getImage } from "../../constant";
import api from "../../constant/api";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { CategoriesItemList, PageTitle } from "../../components";

const Branches = () => {
  const [branches, setBranches] = React.useState([]);
  const navigation = useNavigate();

  React.useEffect(() => {
    const getRequest = async () => {
      const res = await api.get("branch/read");
      const newData = res.data.map((tool, i) => {
        return { img: getImage(i, "sports-branches"), ...tool };
      });
      setBranches(newData);
    };
    getRequest();
  }, []);

  const removeHandle = (id) => {
    api.delete(`branch/remove/${id}`).then((res) => {
      const newCat = branches.filter((x) => x.bransID !== id);
      setBranches(newCat);
    });
  };

  const updateHandle = (id) => {
    navigation(`/branches/update-branches/${id}`);
  };
  return (
    <div className="container flex flex-col md:container md:mx-auto">
      <Helmet>
        <title>ArenaGYM - Branşlar</title>
      </Helmet>

      <PageTitle title="Branşlar" link="/branches/create-branches" />

      <CategoriesItemList
        remove
        update
        secondary
        branches
        data={branches}
        removeHandle={(id) => removeHandle(id)}
        updateHandle={(id) => updateHandle(id)}
      />
    </div>
  );
};

export { Branches };
