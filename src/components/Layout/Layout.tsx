import { Route, Routes } from "react-router-dom";
import CreatePage from "../../pages/CreatePage/CreatePage";
import DetailPage from "../../pages/DetailPage/DetailPage";
import HomePage from "../../pages/HomePage/HomePage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import { useAppSelector } from "../../redux/hooks";
import ExitRoute from "../ExitRoute/ExitRoute";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const Layout = (): JSX.Element => {
  const isLogged = useAppSelector((state) => state.user.isLogged);

  return (
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
      <Route
        path="/home"
        element={
          <ProtectedRoute isLogged={isLogged}>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/character/:idCharacter"
        element={
          <ProtectedRoute isLogged={isLogged}>
            <DetailPage />
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
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Layout;
