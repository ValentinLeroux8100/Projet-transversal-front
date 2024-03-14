import React from "react";

export default function UiAirneisInputText({
  icon,
  children,
}: {
  icon?: string;
  children?: string;
}) {
  return <input type="text" placeholder={children}></input>;
}
