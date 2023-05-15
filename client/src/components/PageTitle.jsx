import React from "react";
import { Link } from "react-router-dom";

const PageTitle = ({ title, link }) => {
  return (
    <div className="flex flex-row justify-between items-center px-5">
      <h1 className="font-mono text-4xl text-[#2D3748]  mb-4 font-bold">
        - {title} -
      </h1>
      <div className="justify-end flex flex-row">
        <Link to={link}>
          <button
            type="button"
            className="text-white bg-blue-700 outline-none hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
          >
            Ekle
          </button>
        </Link>
      </div>
    </div>
  );
};

export { PageTitle };
