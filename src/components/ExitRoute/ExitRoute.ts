import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ExitRouteProps {
  children: JSX.Element;
  isLogged: boolean;
}
const ExitRoute = ({ children, isLogged }: ExitRouteProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigate("/home");
    }
  }, [isLogged, navigate]);

  return children;
};

export default ExitRoute;
