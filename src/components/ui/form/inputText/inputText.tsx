import React from "react";
import styles from "./inputText.module.css";

export default function UiAirneisInputText({
  icon,
  placeholder,
  label,
}: {
  icon?: string;
  placeholder?: string;
  label?: string;
}) {
  return (
    <div className="w-full flex flex-col">
      {label && <span>{label}</span>}
      <div className={styles.inputContainer}>
        <input type="text" placeholder={placeholder}></input>
        {icon && (
          <img className={styles.logo} src={icon} alt="Icone recherche" />
        )}
      </div>
    </div>
  );
}
