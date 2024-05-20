import React from "react";

export default function UiAirneisButton({
  icon,
  children,
  className,
}: {
  icon?: string;
  children?: string;
  className?: string;
}) {
  return (
    <button
      className={
        (className ? className : "") +
        " flex flex-row bg-primary p-2 rounded-lg gap-2 hover:bg-primary-700 justify-center"
      }
    >
      {children}
      {icon && <img className="size-6" src={icon} alt="Icone recherche" />}
    </button>
  );
}
