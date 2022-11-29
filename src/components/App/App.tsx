import { Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import { useAppSelector } from "../../redux/hooks";
import Loading from "../Loading/Loading";
import Modal from "../Modal/Modal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import AppStyled from "./AppStyled";

const App = () => {
  const {
    isLoading,
    modal: { text, isError, isOpen },
  } = useAppSelector((state) => state.ui);
  const isLogged = useAppSelector((state) => state.user.isLogged);

  return (
    <AppStyled>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route
          path="/register"
          element={
            <ProtectedRoute isLogged={isLogged}>
              <RegisterPage />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>

      {isLoading && <Loading />}
      {isOpen && <Modal isError={isError} text={text} />}
    </AppStyled>
  );
};

export default App;
