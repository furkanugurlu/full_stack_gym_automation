import React from "react";
import { Modal } from "./Modal";

const ProfilCard = ({
  url,
  name,
  email,
  gender,
  phoneNo,
  dob,
  dor,
  removeHandle,
  id,
  updateHandle,
  coach,
  pack,
}) => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="2xl:w-[350px]   py-5  group xl:w-[300px] lg:w-[300px] font-mono text-[#2D3748]   md:w-[340px] sm:w-[400px] w-[400px]  overflow-hidden group  bg-[#ECEDFF] border border-gray-200 rounded-lg shadow">
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-40 h-40 rounded-full  mb-3 group-hover:scale-105 duration-300 "
          src={url}
          alt="Bonnie image"
        />

        <h5 className="mb-1 text-xl font-medium text-gray-900">{name}</h5>
        <span className="text-lg mt-2">
          <span className="font-medium">{email}</span>
        </span>
        {gender && (
          <h6 className="text-lg mt-2 text-gray-900 font-bold">
            Cinsiyet: <span className="font-medium">{gender}</span>
          </h6>
        )}
        <h6 className="text-lg mt-2  text-gray-900 font-bold">
          Tel: <span className="font-medium">{phoneNo}</span>
        </h6>
        <h6 className="text-lg mt-2  text-gray-900 font-bold">
          Doğum Tarihi: <span className="font-medium">{dob}</span>
        </h6>

        <h6 className="text-lg mt-2  text-gray-900 font-bold">
          Kayıt Tarihi: <span className="font-medium">{dor}</span>
        </h6>

        {coach && (
          <h6 className="text-lg mt-2  text-gray-900 font-bold">
            Antrenör: <span className="font-medium">{coach}</span>
          </h6>
        )}
        {pack && (
          <h6 className="text-lg mt-2  text-gray-900 font-bold">
            Paket: <span className="font-medium">{pack}</span>
          </h6>
        )}

        <div className="flex mt-4 space-x-3 md:mt-6">
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-500 hover:bg-red-600 rounded-lg"
          >
            Sil
          </button>
          <button
            onClick={() => updateHandle(id)}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
          >
            Düzenle
          </button>
        </div>
      </div>
      <Modal
        onClickYes={() => removeHandle(id)}
        showModal={showModal}
        setShowModal={setShowModal}
        title="Uyarı"
        des="Üyeyi silmek istediğinizden eminmisiniz?"
      />
    </div>
  );
};

export { ProfilCard };
