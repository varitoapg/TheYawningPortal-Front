import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import useToken from "../../hooks/useToken/useToken";
import CreatePage from "../../pages/CreatePage/CreatePage";
import HomePage from "../../pages/HomePage/HomePage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import { useAppSelector } from "../../redux/hooks";
import ExitRoute from "../ExitRoute/ExitRoute";
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
  const { getToken } = useToken();

  useEffect(() => {
    getToken();
  }, [getToken]);

  return (
    <AppStyled>
      <Routes>
        <Route
          path="/"
          element={
            <ExitRoute isLogged={isLogged}>
              <LoginPage />
            </ExitRoute>
          }
        />

        <Route
          path="/register"
          element={
            <ExitRoute isLogged={isLogged}>
              <RegisterPage />
            </ExitRoute>
          }
        />

        <Route
          path="/login"
          element={
            <ExitRoute isLogged={isLogged}>
              <LoginPage />
            </ExitRoute>
          }
        />
        <Route path="/*" element={<NotFoundPage />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute isLogged={isLogged}>
              <HomePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/create"
          element={
            <ProtectedRoute isLogged={isLogged}>
              <CreatePage />
            </ProtectedRoute>
          }
        />
      </Routes>

      {isLoading && <Loading />}
      {isOpen && <Modal isError={isError} text={text} />}
    </AppStyled>
  );
};

export default App;
