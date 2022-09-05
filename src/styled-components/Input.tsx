import React from "react";
export type InputProps = {
  Label: string;
  type: string;
  placeholder: string;
};
export const Input = ({ field, form, ...props }: any) => {
  const { label } = props;
  return (
    <div>
      <label
        htmlFor={label}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          {...field}
          {...props}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
};
