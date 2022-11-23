import styled from "styled-components";
import mainStyleColors from "../../styles/mainStyleColors";
import mainStyleFonts from "../../styles/mainStyleFonts";
import mainStyleSizes from "../../styles/mainStyleSizes";

const RegisterFormStyled = styled.div`
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
      color: ${mainStyleColors.ink.base};
      font-size: ${mainStyleFonts.titleFontSize};
      font-weight: ${mainStyleFonts.mainFontBold};
      text-shadow: 0px 3px 2px ${mainStyleColors.Whites.light};
    }

    &__input {
      width: 320px;
      height: 80px;
      border-radius: ${mainStyleSizes.borderRadiusMinimum};
      border: 1px solid ${mainStyleColors.ink.light};
      box-shadow: 0px 4px 15px -5px ${mainStyleColors.ink.darkest};

      ::placeholder {
        font-size: ${mainStyleFonts.bodyFontSize};
        color: ${mainStyleColors.ink.lightest};
        text-align: center;
      }
    }

    .button {
      padding: ${mainStyleSizes.buttonPadding};
      border-radius: ${mainStyleSizes.borderRadiusMinimum};
      border: none;
      width: 140px;
      height: 40px;
      font-family: ${mainStyleFonts.mainFont};
      font-size: ${mainStyleFonts.titleFontSize};
      font-weight: ${mainStyleFonts.mainFontRegular};
      color: ${mainStyleColors.Whites.lightest};
      background-color: ${mainStyleColors.primary.base};
      margin-bottom: 1rem;
      margin-top: 30px;

      :hover {
        background-color: ${mainStyleColors.primary.darkest};
      }
    }
  }

  .register {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__title {
      font-size: ${mainStyleFonts.titleFontSize};
      font-weight: ${mainStyleFonts.mainFontRegular};
    }

    &__link {
      margin-top: 5px;
      text-decoration: underline;
      font-size: ${mainStyleFonts.titleFontSize};
      color: ${mainStyleColors.primary.base};
      font-weight: ${mainStyleFonts.mainFontRegular};
    }
  }
`;
export default RegisterFormStyled;
