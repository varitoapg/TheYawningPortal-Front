import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
  isLogged: boolean;
}

const ProtectedRoute = ({
  children,
  isLogged,
}: ProtectedRouteProps): JSX.Element => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogged) {
      navigate("/login");
    }
  }, [isLogged, navigate]);

  return children;
};
export default ProtectedRoute;
