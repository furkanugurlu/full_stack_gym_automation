import React from "react";
import { useField, ErrorMessage } from "formik";

const Input = ({ lable, ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <div className="rounded-md shadow-sm">
      <input
        {...field}
        {...props}
        className={`w-full border-b outline-none   ${
          meta?.error && meta?.touched ? "border-red-600" : "focus:border-black"
        } `}
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
