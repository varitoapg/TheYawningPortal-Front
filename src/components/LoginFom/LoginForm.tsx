import { useState } from "react";
import { UserLoginCredentials } from "../../hooks/useUser/types";
import RegisterFormStyled from "../RegisterForm/RegisterFormStyled";

const LoginForm = (): JSX.Element => {
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

  return (
    <RegisterFormStyled>
      <form className="login-form">
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

        <button className="button">Log in</button>
      </form>
      <div className="register">
        <span className="register__title">Are you new, traveler?</span>
        <a className="register__link" href="/">
          Register
        </a>
      </div>
    </RegisterFormStyled>
  );
};

export default LoginForm;
