import styled from "styled-components";

const ModalStyled = styled.div`
  padding: ${(props) => props.theme.size.padding.overall};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .modal {
    background-color: ${(props) => props.theme.color.whites.base};
    border: 3px solid ${(props) => props.theme.color.successColor.base};
    border-radius: ${(props) => props.theme.size.borderRadius.regular};
    padding: ${(props) => props.theme.size.padding.overall};
    display: flex;
    position: relative;
    gap: 25px;

    &--error {
      border: 3px solid ${(props) => props.theme.color.errors.base};
    }

    &-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 300px;
      white-space: pre-line;
    }
    .icon {
      color: ${(props) => props.theme.color.successColor.base};
      width: 65px;
      height: 65px;
      &__text {
        font-size: ${(props) => props.theme.font.main.sizes.title};
        text-align: center;
      }
      &--error {
        color: ${(props) => props.theme.color.errors.base};
      }

      &-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }
    }

    &-text {
      font-size: ${(props) => props.theme.font.main.sizes.title};
      vertical-align: middle;
    }

    .button-modal {
      background-color: transparent;
      border: none;
      top: 14px;
      width: 50px;
      height: 50px;
      padding: 0px;
      margin: 0px;
      position: absolute;
      top: 0px;
      right: 10px;

      &__icon {
        color: ${(props) => props.theme.color.successColor.base};
        width: 50px;
        height: 50px;
        position: relative;

        &--error {
          color: ${(props) => props.theme.color.errors.base};
        }
      }
    }
  }
`;

export default ModalStyled;
