import React from "react";

const ProfilCard = ({ url, name, email }) => {
  return (
    <div className="text-center">
      <img src={url} className="mx-auto mb-4 w-32 rounded-lg" alt="Avatar" />
      <h5 className="mb-2 text-xl font-medium leading-tight">{name}</h5>
      <p className="text-neutral-500 dark:text-neutral-400">{email}</p>
    </div>
  );
};

export { ProfilCard };
