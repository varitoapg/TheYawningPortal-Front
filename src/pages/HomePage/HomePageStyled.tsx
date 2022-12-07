import styled from "styled-components";
import caretImage from "../../resources/svg/caret-down.svg";

const HomePageStyled = styled.div`
  padding: 20px;

  .filter-class {
    &-container {
      display: flex;
      align-items: baseline;
    }

    &__label {
      text-transform: capitalize;
      font-size: ${(props) => props.theme.font.main.sizes.headline};
      margin-right: 10px;
    }

    &__input {
      max-width: 310px;
      text-transform: capitalize;
      font-family: ${(props) => props.theme.font.main.family};
      font-size: ${(props) => props.theme.font.main.sizes.title};
      width: 100%;
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

  .content-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

export default HomePageStyled;
