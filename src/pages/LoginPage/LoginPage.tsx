import Header from "../../components/Header/Header";
import LoginForm from "../../components/LoginFom/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = () => {
  return (
    <>
      <Header />
      <LoginPageStyled>
        <LoginForm />
      </LoginPageStyled>
    </>
  );
};

export default LoginPage;
