import { Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import { useAppSelector } from "../../redux/hooks";
import Modal from "../Modal/Modal";
import AppStyled from "./AppStyled";

const App = () => {
  const {
    modal: { text, isError, isOpen },
  } = useAppSelector((state) => state.ui);

  return (
    <AppStyled>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>

      {isOpen && <Modal isError={isError} text={text} />}
    </AppStyled>
  );
};

export default App;
