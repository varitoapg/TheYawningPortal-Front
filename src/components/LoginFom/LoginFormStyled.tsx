import styled from "styled-components";

const LoginFormStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    &__item {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    &__label {
      color: ${(props) => props.theme.color.ink.base};
      font-size: ${(props) => props.theme.font.main.sizes.title};
      font-weight: ${(props) => props.theme.font.main.weights.bold};
      text-shadow: 0px 3px 2px ${(props) => props.theme.color.whites.light};
    }

    &__input {
      width: 320px;
      height: 80px;
      padding: ${(props) => props.theme.size.padding.regular};
      border-radius: ${(props) => props.theme.size.borderRadius.minimum};
      border: 1px solid ${(props) => props.theme.color.ink.light};
      box-shadow: 0px 4px 15px -5px ${(props) => props.theme.color.ink.darkest};
      text-align: center;
      font-family: inherit;
      font-size: ${(props) => props.theme.font.main.sizes.title};
      color: ${(props) => props.theme.color.ink.base};

      ::placeholder {
        font-size: ${(props) => props.theme.font.main.sizes.body};
        color: ${(props) => props.theme.color.ink.lightest};
        text-align: center;
      }
    }

    .button {
      padding: ${(props) => props.theme.size.padding.regular};
      border-radius: ${(props) => props.theme.size.borderRadius.minimum};
      border: none;
      width: 140px;
      height: 40px;
      font-family: ${(props) => props.theme.font.main.family};
      font-size: ${(props) => props.theme.font.main.sizes.title};
      font-weight: ${(props) => props.theme.font.main.weights.regular};
      color: ${(props) => props.theme.color.whites.lightest};
      background-color: ${(props) => props.theme.color.primary.base};
      margin-bottom: 1rem;
      margin-top: 30px;

      :hover {
        background-color: ${(props) => props.theme.color.primary.darkest};
      }
    }
  }

  .register {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__title {
      font-size: ${(props) => props.theme.font.main.sizes.title};
      font-weight: ${(props) => props.theme.font.main.weights.regular};
    }

    &__link {
      margin-top: 5px;
      text-decoration: underline;
      font-size: ${(props) => props.theme.font.main.sizes.title};
      color: ${(props) => props.theme.color.primary.base};
      font-weight: ${(props) => props.theme.font.main.weights.regular};
    }
  }
`;
export default LoginFormStyled;
