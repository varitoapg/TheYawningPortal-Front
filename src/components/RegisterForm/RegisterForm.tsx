import { useState } from "react";
import useUser from "../../hooks/useUser/useUser";
import { UserRegisterCredentials } from "../../redux/features/userSlice/types";
import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = (): JSX.Element => {
  const { userRegister } = useUser();

  const initialRegisterFormData: UserRegisterCredentials = {
    username: "",
    password: "",
    email: "",
  };

  const [formRegisterData, setformRegisterData] = useState(
    initialRegisterFormData
  );

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setformRegisterData({
      ...formRegisterData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formDataToSubmit: UserRegisterCredentials = {
      username: formRegisterData.username,
      password: formRegisterData.password,
      email: formRegisterData.email,
    };

    userRegister(formDataToSubmit);
  };

  return (
    <RegisterFormStyled>
      <form className="login-form" onClick={handleSubmit}>
        <div className="login-form__item">
          <label className="login-form__label" htmlFor="username">
            Username
          </label>
          <input
            className="login-form__input"
            type="text"
            name="username"
            id="username"
            value={formRegisterData.username}
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
            value={formRegisterData.password}
            placeholder="Insert your password here"
            onChange={handleFormChange}
            autoComplete="off"
            required
          />
        </div>
        <div className="login-form__item">
          <label className="login-form__label" htmlFor="email">
            Email
          </label>
          <input
            className="login-form__input"
            type="email"
            name="email"
            id="email"
            value={formRegisterData.email}
            placeholder="Insert your email  here"
            onChange={handleFormChange}
            autoComplete="off"
            required
          />
        </div>
        <button className="button">Register</button>
      </form>
      <div className="register">
        <span className="register__title">Do you want a pint of mead?</span>
        <a className="register__link" href="/">
          Log in
        </a>
      </div>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
