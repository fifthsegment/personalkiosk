import { PropsWithChildren } from "react";

export const Button = ({
  children,
  onClick,
}: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 -my-2.5 ml-8"
    >
      {children}
    </button>
  );
};