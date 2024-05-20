import React from "react";

interface SelectProps {
  className?: string;
  values: string[];
}

export default function UiAirneisSelect(props: SelectProps) {
  return (
    <select
      className={
        props.className +
        "flex flex-row w-full border-2 border-primary rounded-lg bg-background py-1.5 px-2.5 gap-1.5"
      }
    >
      {props.values.map((value) => {
        return <option value={value}>{value}</option>;
      })}
    </select>
  );
}
