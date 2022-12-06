import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import CreatePage from "../../pages/CreatePage/CreatePage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import { useAppSelector } from "../../redux/hooks";
import ExitRoute from "../ExitRoute/ExitRoute";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const NotFoundPage = lazy(
  () => import("../../pages/NotFoundPage/NotFoundPage")
);
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));

const RegisterPage = lazy(
  () => import("../../pages/RegisterPage/RegisterPage")
);

const DetailPage = lazy(() => import("../../pages/DetailPage/DetailPage"));

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
