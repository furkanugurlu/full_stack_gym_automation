import { useField, ErrorMessage } from "formik";
import React from "react";

const SelectBox = ({ label, options, ...props }) => {
  const [field, meta, helpers] = useField(props);

  const changeHandle = (e) => {
    helpers.setValue(e.target.value);
  };
  return (
    <div className="rounded-md shadow-sm">
      <select onChange={changeHandle} defaultValue={field.value} {...props}>
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
    </div>
  );
};

export { SelectBox };
