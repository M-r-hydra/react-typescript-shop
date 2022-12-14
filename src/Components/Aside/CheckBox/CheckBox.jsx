// React
import React from "react";
// React
// CSS
import styles from "./CheckBox.module.css";
// CSS
const CheckBox = ({ options: { name, label, isChecked }, onClick }) => {
  return (
    <div
      className={`
    flex items-center justify-start
    2xl:ml-5 ${styles.checkBox}`}
    >
      <input
        type="checkbox"
        defaultChecked={isChecked ? true : false}
        name={name}
        id={`${label}`}
        onChange={() => onClick(name)}
      />
      <label
        className="
      text-white
      2xl:ml-3 "
        htmlFor={`${label}`}
      >
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
