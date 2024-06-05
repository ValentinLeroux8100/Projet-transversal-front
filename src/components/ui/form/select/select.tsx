import React from "react";

interface SelectProps {
  className?: string;
  values: string[];
  selectionnedValue?: number,
  onChange?: any
}

export default function UiAirneisSelect(props: SelectProps) {
  return (
    <select
      className={
        props.className +
        "flex flex-row w-full border-2 border-primary rounded-lg bg-background py-1.5 px-2.5 gap-1.5"
      }
      onChange={props.onChange}
    >
      {props.values.map((value, index) => {
        return <option key={value} value={value} selected={props.selectionnedValue == index+1}>{value}</option>;
      })}
    </select>
  );
}
