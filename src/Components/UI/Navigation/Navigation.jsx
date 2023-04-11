import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.list}>
        <Link to="/about" className={styles.item}>
          About
        </Link>
        <Link to="/posts" className={styles.item}>
          Posts
        </Link>
      </div>
    </nav>
  );
};
