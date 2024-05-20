import React from "react";
import style from "./checkbox.module.css";

export default function UiAirneisCheckbox() {
  return (
    <div>
      <input type="checkbox" className={style["checkbox"]} />
    </div>
  );
}
