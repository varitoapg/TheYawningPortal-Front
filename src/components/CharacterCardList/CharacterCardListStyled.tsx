import styled from "styled-components";

const CharacterCardListStyled = styled.div`
  .characters-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
  }

  .empty-warning {
    background-color: ${(props) => props.theme.color.whites.base};
    border-radius: ${(props) => props.theme.size.borderRadius.regular};
    border: 1px solid ${(props) => props.theme.color.ink.base};
    padding: ${(props) => props.theme.size.padding.overall};
    margin-top: 20px;

    &__title {
      font-size: ${(props) => props.theme.font.main.sizes.headline};
      font-weight: ${(props) => props.theme.font.main.weights.bold};
      color: ${(props) => props.theme.color.ink.base};
      margin-bottom: 10px;
    }

    &__text {
      font-size: ${(props) => props.theme.font.main.sizes.title};
    }

    &__link {
      font-size: ${(props) => props.theme.font.main.sizes.title};
      color: ${(props) => props.theme.color.primary.base};
      margin-left: 5px;
    }
  }

  .total-characters {
    color: ${(props) => props.theme.color.ink.base};
    font-size: ${(props) => props.theme.font.main.sizes.title};
    font-weight: ${(props) => props.theme.font.main.weights.regular};
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;

export default CharacterCardListStyled;
