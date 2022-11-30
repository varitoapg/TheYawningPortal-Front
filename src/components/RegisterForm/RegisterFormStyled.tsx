import styled from "styled-components";

const RegisterFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.size.padding.overall};
  padding-top: 100px;

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
      min-width: 250px;
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
export default RegisterFormStyled;
