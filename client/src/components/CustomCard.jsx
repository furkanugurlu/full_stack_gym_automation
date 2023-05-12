import React from "react";

const CustomCard = ({ title, url, price, email, date, marka, isMore }) => {
  const nn = new Date(date);
  const localDateString = nn.toLocaleDateString();
  return (
    <div className="2xl:w-[350px] cursor-pointer  xl:w-[300px] lg:w-[300px] font-mono text-[#2D3748]   md:w-[340px] sm:w-[400px] w-[400px]  overflow-hidden group  bg-[#ECEDFF] border border-gray-200 rounded-lg shadow">
      <img
        className="rounded-t-lg group-hover:scale-105 transition-all duration-500"
        src={url}
        alt=""
      />
      <div className="p-5">
        <a>
          <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
        </a>
        {price && (
          <p className="mb-3  font-bold ">
            Ücret:<span className="font-light">{price} ₺</span>
          </p>
        )}
        {email && (
          <p className="mb-3  font-bold ">
            Ücret:<span className="font-light">{email} ₺</span>
          </p>
        )}
        {date && (
          <p className="mb-3  font-bold ">
            Alınma Tarihi:<span className="font-light">{localDateString}</span>
          </p>
        )}
        {marka && (
          <p className="mb-3  font-bold ">
            Marka:<span className="font-light">{marka}</span>
          </p>
        )}
        {isMore && (
          <a
            href=""
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#444bff] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Daha Fazla
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export { CustomCard };
