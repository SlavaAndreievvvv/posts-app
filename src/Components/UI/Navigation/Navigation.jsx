import { useContext } from "react";
import { Button } from "../Button";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";

export const Navigation = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const loginOut = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };
  return (
    <div className={styles.container}>
      <nav className={styles.navigation}>
        <Button className={styles.button} onClick={loginOut}>
          Exit
        </Button>
        <div className={styles.list}>
          <Link to="/about" className={styles.item}>
            About
          </Link>
          <Link to="/posts" className={styles.item}>
            Posts
          </Link>
        </div>
      </nav>
    </div>
  );
};
