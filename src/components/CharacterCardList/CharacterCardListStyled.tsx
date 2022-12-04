import styled from "styled-components";

const CharacterCardListStyled = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  .empty-warning {
    color: ${(props) => props.theme.color.ink.base};
    font-size: ${(props) => props.theme.font.main.sizes.display};
    font-weight: ${(props) => props.theme.font.main.weights.bold};
    background-color: ${(props) => props.theme.color.whites.base};
    border-radius: ${(props) => props.theme.size.borderRadius.regular};
    padding: ${(props) => props.theme.size.padding.overall};
    border: 1px solid ${(props) => props.theme.color.ink.base};
  }
`;

export default CharacterCardListStyled;
