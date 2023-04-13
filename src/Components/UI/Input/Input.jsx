import styles from "./Input.module.css";
import React from "react";

export const Input = (props) => {
  return <input {...props} className={styles.input}></input>;
};
