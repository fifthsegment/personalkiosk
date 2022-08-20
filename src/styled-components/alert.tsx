export type AlertComponentProps = {
  title?: string;
};

export const AlertComp = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      className="alert-top alert alert-info font-weight-bold  text-white "
      role="alert"
    >
      {children}
      <button>X</button>
    </div>
  );
};
