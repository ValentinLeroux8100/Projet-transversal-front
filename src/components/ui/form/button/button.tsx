import React from "react";

export default function UiAirneisButton({
  icon,
  children,
  className,
  vertical,
  onClick
}: {
  icon?: string;
  children?: string;
  className?: string;
  vertical?: boolean;
  onClick?: any
}) {
  return (
    <button
      className={
        (className ? className : "") +
        (vertical ? " flex-col-reverse  " : " flex-row") +
        " flex bg-primary p-2 rounded-lg gap-2 hover:bg-primary-700 justify-center"
      }
      onClick={onClick}
    >
      {children}
      {icon && <img className="size-6" src={icon} alt="Icone recherche" />}
    </button>
  );
}
