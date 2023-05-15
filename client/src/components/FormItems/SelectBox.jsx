import { useField, ErrorMessage } from "formik";
import React, { useEffect } from "react";

const SelectBox = ({ label, options, ...props }) => {
  const [field, meta, helpers] = useField(props);

  const changeHandle = (e) => {
    helpers.setValue(e.target.value);
  };
  return (
    <>
      <label htmlFor={`floating_${field?.name}`} className="font-mono">
        {label}
      </label>
      <select
        onChange={changeHandle}
        defaultValue={field.value}
        {...props}
        className={`block mb-6 py-2.5 px-0 w-full outline-none text-sm text-gray-900 peer bg-transparent border-b-2  appearance-none ${
          meta?.error && meta?.touched ? "border-red-600" : "border-gray-300"
        } `}
      >
        <option value="">Seçin</option>
        {options?.map((option, key) => (
          <option value={option.value} key={key}>
            {option.value}
          </option>
        ))}
      </select>
      <ErrorMessage
        name={field.name}
        component="small"
        className="text-xs block mt-2 text-red-600"
      />
    </>
  );
};

export { SelectBox };
