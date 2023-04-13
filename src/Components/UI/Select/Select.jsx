import styles from "./Select.module.css";

export const Select = ({ options, defaultOptions, value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className={styles.select}
    >
      <option disabled value="">
        {defaultOptions}
      </option>
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          className={styles.option}
        >
          {option.name}
        </option>
      ))}
    </select>
  );
};
