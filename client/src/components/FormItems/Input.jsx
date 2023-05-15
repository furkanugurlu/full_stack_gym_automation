import React from "react";
import { useField, ErrorMessage } from "formik";

const Input = ({ col, label, ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <div className={`relative z-0 w-full mb-6 group ${col}`}>
      <label htmlFor={`floating_${field?.name}`} className="font-mono ">
        {label}
      </label>
      <input
        {...field}
        {...props}
        className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  appearance-none   focus:outline-none focus:ring-0 group  ${
          meta?.error && meta?.touched ? "border-red-600" : "border-gray-300"
        } `}
        id={`floating_${field?.name}`}
      />

      <ErrorMessage
        name={field.name}
        component="small"
        className="text-xs block mt-2 text-red-600"
      />
    </div>
  );
};

export { Input };
