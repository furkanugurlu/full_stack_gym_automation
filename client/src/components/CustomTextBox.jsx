import React from "react";

const CustomTextBox = () => {
  return (
    <div className="relative rounded-md shadow-sm">
      <input
        type="text"
        name="email"
        id="email"
        className="block w-full pr-10 border-gray-300 rounded-md py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        placeholder="Email adresinizi girin"
      />
    </div>
  );
};

export { CustomTextBox };
