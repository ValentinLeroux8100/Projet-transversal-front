import React from "react";
import styles from "./inputText.module.css";

export default function UiAirneisInputText({
  icon,
  placeholder,
  name,
  label,
  value
}: {
  icon?: string;
  placeholder?: string;
  name?: string;
  label?: string;
  value?: string
}) {

  return (
    <div className="w-full flex flex-col">
      {label && <span>{label}</span>}
      <div className={styles.inputContainer}>
        <input type="text" placeholder={placeholder} defaultValue={value} name={name}></input>
        {icon && (
          <img className={styles.logo} src={icon} alt="Icone recherche" />
        )}
      </div>
    </div>
  );
}
