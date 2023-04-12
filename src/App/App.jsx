import { BrowserRouter } from "react-router-dom";
import { Navigation } from "../Components/UI/Navigation/Navigation";
import { AppRouter } from "../Components/AppRouter";
import { AuthContext } from "../context";
import { useEffect, useState } from "react";

export const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
      <BrowserRouter>
        <Navigation />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
};
