import React from "react";
import styles from "./inputText.module.css";

export default function UiAirneisInputText({
  icon,
  placeholder,
  name,
  label,
  value,
  onChange,
  isPassword = false
}: {
  icon?: string;
  placeholder?: string;
  name?: string;
  label?: string;
  value?: string;
  onChange ?: any;
  isPassword ?: boolean
}) {

  const handleChange = (event) => {
    if(onChange)
      onChange(event.target.value)
  }

  return (
    <div className="w-full flex flex-col">
      {label && <span>{label}</span>}
      <div className={styles.inputContainer}>
        <input type={isPassword?"password":"text"} 
        onChange={handleChange} 
        placeholder={placeholder} 
        defaultValue={value} 
        name={name}></input>
        {icon && (
          <img className={styles.logo} src={icon} alt="Icone recherche" />
        )}
      </div>
    </div>
  );
}
