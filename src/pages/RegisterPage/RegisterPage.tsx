import Header from "../../components/Header/Header";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import RegisterPageStyled from "./RegisterPageStyled";

const RegisterPage = () => {
  return (
    <>
      <Header />
      <RegisterPageStyled>
        <RegisterForm />
      </RegisterPageStyled>
    </>
  );
};

export default RegisterPage;
