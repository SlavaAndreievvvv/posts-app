import { BrowserRouter } from "react-router-dom";
import { Navigation } from "../Components/UI/Navigation/Navigation";
import { AppRouter } from "../Components/AppRouter";

export const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <AppRouter />
    </BrowserRouter>
  );
};
