import { Route, Routes } from "react-router-dom";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import AppStyled from "./AppStyled";

const App = () => {
  return (
    <AppStyled>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
      </Routes>
    </AppStyled>
  );
};

export default App;
