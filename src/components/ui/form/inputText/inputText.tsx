import React from "react";
import styles from "./inputText.module.css";

export default function UiAirneisInputText({
  icon,
  children,
}: {
  icon?: string;
  children?: string;
}) {
  return (
    <div className={styles.inputContainer}>
      <input type="text" placeholder={children}></input>
      {icon && <img className={styles.logo} src={icon} alt="Icone recherche" />}
    </div>
  );
}
