import styled from "styled-components";
import caretImage from "../../resources/svg/caret-down.svg";

const CreateFormStyled = styled.form`
  border: 1px solid ${(props) => props.theme.color.whites.darkest};
  border-radius: ${(props) => props.theme.size.borderRadius.regular};
  padding: ${(props) => props.theme.size.padding.overall} 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  .edit-profile {
    &__image {
      width: 200px;
      height: 200px;
      object-fit: cover;
      object-position: top;
      border-radius: 50%;
      border: 5px solid ${(props) => props.theme.color.characterClass.sorcerer};
      object-fit: cover;
      object-position: top;
      margin: 0 auto;
    }
  }

  .create-form {
    &__item {
      &--image {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
    &__label {
      &--character {
        color: ${(props) => props.theme.color.ink.base};
        font-size: ${(props) => props.theme.font.main.sizes.headline};
        font-weight: ${(props) => props.theme.font.main.weights.bold};
        text-transform: capitalize;
        margin-right: 5px;
      }
    }

    &__input {
      border: none;
      font-family: ${(props) => props.theme.font.main.family};
      color: ${(props) => props.theme.color.ink.base};
      font-size: ${(props) => props.theme.font.main.sizes.title};
      padding: ${(props) => props.theme.size.padding.regular};
      border-bottom: 1px solid ${(props) => props.theme.color.whites.darkest};
      min-width: 100%;
      max-width: 360px;

      &:focus {
        outline: none;
      }

      &--select {
        -webkit-appearance: none;
        border: 2px solid ${(props) => props.theme.color.ink.darkest};
        border-radius: ${(props) => props.theme.size.borderRadius.big};
        padding: 10px;
        margin-top: 10px;
        background: url(${caretImage}) no-repeat 93%,
          linear-gradient(
            90deg,
            ${(props) => props.theme.color.whites.lightest} 80%,
            ${(props) => props.theme.color.primary.light} 80%,
            ${(props) => props.theme.color.primary.base} 80%
          );
      }
    }
  }

  .character-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .secondary-stats {
    background-color: ${(props) => props.theme.color.whites.light};
    border: 1px solid ${(props) => props.theme.color.whites.darkest};
    border-radius: ${(props) => props.theme.size.borderRadius.small};
    padding: 16px 10px;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 5px;

    &-title {
      text-align: center;
      margin-top: 10px;
      color: ${(props) => props.theme.color.ink.base};
      font-size: ${(props) => props.theme.font.main.sizes.title};
      text-transform: capitalize;
      max-width: 75px;
    }
    &-value {
      background-color: ${(props) => props.theme.color.whites.lightest};
      color: ${(props) => props.theme.color.ink.base};
      font-size: ${(props) => props.theme.font.main.sizes.display};
      font-weight: ${(props) => props.theme.font.main.weights.bold};
      text-align: center;
      border: 1px solid ${(props) => props.theme.color.ink.base};
      border-radius: ${(props) => props.theme.size.borderRadius.small};
      padding: 11px;
      max-width: 75px;
    }

    &-container {
      display: flex;
      flex-direction: column-reverse;
    }

    &__item {
      display: flex;
      flex-direction: column-reverse;
    }

    &__label {
      text-align: center;
      color: ${(props) => props.theme.color.ink.base};
      font-size: ${(props) => props.theme.font.main.sizes.title};
      font-weight: ${(props) => props.theme.font.main.weights.bold};
      text-transform: capitalize;
      margin-top: 10px;
    }

    &__input {
      background-color: ${(props) => props.theme.color.whites.lightest};
      color: ${(props) => props.theme.color.ink.base};
      font-size: ${(props) => props.theme.font.main.sizes.display};
      font-weight: ${(props) => props.theme.font.main.weights.regular};
      text-align: center;
      border: 1px solid ${(props) => props.theme.color.ink.base};
      border-radius: ${(props) => props.theme.size.borderRadius.small};
      padding: 11px;
      min-width: 50px;
      min-height: 50px;
      max-width: 75px;
      max-height: 75px;

      &:focus {
        outline: none;
      }
    }
  }

  .main-stats {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 16px;
    background-color: ${(props) => props.theme.color.ink.lightest};
    border: 1px solid ${(props) => props.theme.color.ink.base};
    border-radius: ${(props) => props.theme.size.borderRadius.regular};
    padding: ${(props) => props.theme.size.padding.overall} 10px;

    &__item {
      background-color: ${(props) => props.theme.color.whites.base};
      border: 1px solid ${(props) => props.theme.color.ink.light};
      border-radius: ${(props) => props.theme.size.borderRadius.regular};
      padding: 5px 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      padding-bottom: 20px;
      margin-bottom: 10px;
      width: 200px;
      height: 120px;
    }

    &__label {
      color: ${(props) => props.theme.color.ink.base};
      font-size: ${(props) => props.theme.font.main.sizes.headline};
      font-weight: ${(props) => props.theme.font.main.weights.bold};
      text-transform: capitalize;
      text-overflow: clip;
    }
    &__input {
      background-color: ${(props) => props.theme.color.whites.base};
      color: ${(props) => props.theme.color.ink.base};
      font-size: ${(props) => props.theme.font.main.sizes.display};
      font-weight: ${(props) => props.theme.font.main.weights.regular};
      text-align: center;
      border: none;
      border-bottom: 1px solid ${(props) => props.theme.color.whites.darkest};
      padding: 11px;
      min-width: 50px;
      min-height: 50px;
      max-width: 75px;
      max-height: 75px;

      &:focus {
        outline: none;
      }
    }

    &__modifier {
      background: ${(props) => props.theme.color.whites.lightest};
      padding: 5px;
      border-radius: 10px;
      width: 75px;
      text-align: center;
      position: relative;
      font-size: ${(props) => props.theme.font.main.sizes.title};
      border: 1px solid ${(props) => props.theme.color.ink.darkest};
    }
  }

  .character-information {
    &-container {
      display: flex;
      flex-direction: column;
      gap: 10px;
      border: 1px solid ${(props) => props.theme.color.whites.darkest};
      border-radius: ${(props) => props.theme.size.borderRadius.regular};
      padding: ${(props) => props.theme.size.padding.overall} 10px;
      background-color: ${(props) => props.theme.color.whites.base};
    }

    &__label {
      font-size: ${(props) => props.theme.font.main.sizes.title};
      font-weight: ${(props) => props.theme.font.main.weights.bold};
      text-transform: capitalize;
    }

    &__input {
      min-width: 100%;
      margin-top: 10px;
      border: none;
      background-color: inherit;
      border-bottom: 2px solid ${(props) => props.theme.color.whites.darkest};
      font-size: ${(props) => props.theme.font.main.sizes.title};
      color: ${(props) => props.theme.color.ink.base};

      &:focus {
        outline: none;
      }

      &::placeholder {
        font-size: ${(props) => props.theme.font.main.sizes.body};
        font-family: ${(props) => props.theme.font.main.family};
        color: ${(props) => props.theme.color.ink.light};
      }

      &--textArea {
        margin-top: 10px;
        width: 100%;
        height: 150px;
        padding: 12px 10px;
        border: 2px solid ${(props) => props.theme.color.whites.lightest};
        border-radius: 4px;
        border: none;
        background-color: #f8f8f8;
        font-size: ${(props) => props.theme.font.main.sizes.title};
        resize: none;

        &:focus {
          outline: none;
        }
      }
    }
  }
  .button {
    margin: 0;
    &--randomize {
      width: 50px;
      height: 50px;
      position: relative;
      right: -100px;
      top: -100px;

      &:disabled {
        border: 1px solid ${(props) => props.theme.color.ink.lightest};
      }
    }

    &--create {
      position: fixed;
      bottom: 20px;
    }
  }

  option {
    text-transform: capitalize;
  }
`;

export default CreateFormStyled;
