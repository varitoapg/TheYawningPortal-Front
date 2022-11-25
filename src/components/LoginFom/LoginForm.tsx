import { useState } from "react";
import { Link } from "react-router-dom";
import { UserLoginCredentials } from "../../hooks/useUser/types";
import useUser from "../../hooks/useUser/useUser";
import Button from "../Button/Button";
import RegisterFormStyled from "../RegisterForm/RegisterFormStyled";

const LoginForm = (): JSX.Element => {
  const { userLogin } = useUser();

  const initialLogindFormData: UserLoginCredentials = {
    username: "",
    password: "",
  };

  const [formLoginData, setFormLoginData] = useState(initialLogindFormData);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormLoginData({
      ...formLoginData,
      [event.target.id]: event.target.value,
    });
  };
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formDataToSubmit = {
      username: formLoginData.username,
      password: formLoginData.password,
    };

    await userLogin(formDataToSubmit);
  };

  return (
    <RegisterFormStyled>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-form__item">
          <label className="login-form__label" htmlFor="username">
            Username
          </label>
          <input
            className="login-form__input"
            type="text"
            name="username"
            id="username"
            placeholder="Insert your username here"
            onChange={handleFormChange}
            autoComplete="off"
            required
          />
        </div>
        <div className="login-form__item">
          <label className="login-form__label" htmlFor="password">
            Password
          </label>
          <input
            className="login-form__input"
            type="password"
            name="password"
            id="password"
            placeholder="Insert your password here"
            onChange={handleFormChange}
            autoComplete="off"
            required
          />
        </div>
        <Button children="Log in" ariaLabel="Log in" />
      </form>
      <div className="register">
        <span className="register__title">Are you new, traveler?</span>
        <Link className="register__link" to="/register">
          Register
        </Link>
      </div>
    </RegisterFormStyled>
  );
};

export default LoginForm;
