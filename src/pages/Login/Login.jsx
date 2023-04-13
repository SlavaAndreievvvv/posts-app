import { useContext } from "react";
import { Button } from "../../Components/UI/Button";
import { Input } from "../../Components/UI/Input";
import styles from "./Login.module.css";
import { AuthContext } from "../../context";

export const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };
  return (
    <div className={styles.login}>
      <h1 className={styles.login}></h1>
      <form className={styles.form} onSubmit={login}>
        <Input type="text" placeholder="Enter login" />
        <Input type="password" placeholder="Enter password" />
        <Button>Enter</Button>
      </form>
    </div>
  );
};
