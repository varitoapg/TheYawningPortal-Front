import styled from "styled-components";

const ButtonStyled = styled.button`
  &.button {
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

    :disabled {
      color: ${(props) => props.theme.color.whites.darkest};
      background-color: ${(props) => props.theme.color.whites.base};
    }
  }
`;

export default ButtonStyled;
