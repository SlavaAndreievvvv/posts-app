import styles from "./PostItem.module.css";
import clsx from "clsx";
import PropTypes from "prop-types";

export const PostItem = ({ title, desc }) => {
  return (
    <div className={styles.post}>
      <div className={styles.postContent}>
        <p className={clsx(styles.title, styles.text)}>{title}</p>
        <p className={clsx(styles.desc, styles.text)}>{desc}</p>
      </div>
      <div className={styles.postBtn}>
        <button className={clsx(styles.delete, styles.text)}>delete</button>
      </div>
    </div>
  );
};

PostItem.propTypes = {
  title: PropTypes.string,
  decs: PropTypes.string,
};
