import styled from "styled-components";

const NavigationMenuStyled = styled.div`
  .desktop {
    display: none;
  }

  .mobile {
    display: block;
  }

  .button {
    &-navigation {
      margin: 0;
      background-color: transparent;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &--logout {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      font-size: ${(props) => props.theme.font.main.sizes.display};
      width: 100%;
      color: ${(props) => props.theme.color.whites.lightest};
    }

    &:hover {
      background-color: transparent;
    }
  }

  .menu {
    &-icon {
      width: 30px;
      height: 30px;
      color: ${(props) => props.theme.color.whites.lightest};
      position: absolute;
    }
  }

  .main-navigation {
    &__list {
      margin: 0 auto;
      margin-top: 16px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      text-align: center;
      text-transform: capitalize;
      align-items: baseline;
      position: absolute;
      right: 80px;
      top: -50%;
      z-index: 1;
    }

    &__option {
      width: 200px;
      background-color: ${(props) => props.theme.color.primary.base};
      border: 1px solid ${(props) => props.theme.color.whites.lightest};
      padding: ${(props) => props.theme.size.padding.regular};
    }

    &__link {
      font-size: ${(props) => props.theme.font.main.sizes.display};
      color: ${(props) => props.theme.color.whites.lightest};
      font-weight: ${(props) => props.theme.font.main.weights.regular};

      &:active {
        font-weight: ${(props) => props.theme.font.main.weights.bold};
        text-decoration: underline;
      }
    }
  }

  .show {
    top: 60px;
  }

  @media only screen and (min-width: 900px) {
    .mobile {
      display: none;
    }

    .desktop {
      display: block;
    }

    .button {
      &-navigation {
        margin: 0;
        background-color: transparent;
        width: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &--logout {
        margin: 0;
        font-size: inherit;
        padding: ${(props) => props.theme.size.padding.regular};
        width: 100%;
        background-color: ${(props) => props.theme.color.whites.lightest};
        color: ${(props) => props.theme.color.ink.base};

        &:hover {
          background-color: ${(props) => props.theme.color.whites.lightest};
        }
      }

      &:hover {
        background-color: ${(props) => props.theme.color.whites.base};
      }
    }

    .main-navigation {
      &__list {
        margin: 0 auto;
        margin-top: 16px;
        display: flex;
        flex-direction: row;
        position: absolute;
        right: 20px;
        top: 0;
      }

      &__option {
        width: 100%;
        background-color: ${(props) => props.theme.color.primary.base};
        border: none;
        padding: ${(props) => props.theme.size.padding.regular};
      }

      &__link {
        font-size: ${(props) => props.theme.font.main.sizes.headline};
        color: ${(props) => props.theme.color.whites.lightest};
        font-weight: ${(props) => props.theme.font.main.weights.regular};

        &--logout {
          background-color: white;
        }
        &:active {
          font-weight: ${(props) => props.theme.font.main.weights.bold};
          text-decoration: underline;
        }
      }
    }
  }
`;

export default NavigationMenuStyled;
