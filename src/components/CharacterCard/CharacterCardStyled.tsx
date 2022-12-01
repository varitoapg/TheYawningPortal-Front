import styled from "styled-components";

const CharacterCardStyled = styled.li`
  background-color: ${(props) => props.theme.color.whites.base};
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  gap: 10px;
  border-radius: ${(props) => props.theme.size.borderRadius.regular};
  border: 1px solid ${(props) => props.theme.color.ink.lightest};
  padding: 11px 22px;
  max-width: 400px;
  min-width: 292px;

  .character {
    &-state {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    &__image {
      max-width: 100px;
      aspect-ratio: 1/1;
      border-radius: 50%;
      background-color: wheat;
      border: 5px solid ${(props) => props.theme.color.characterClass.sorcerer};
      object-fit: cover;
      object-position: top;

      &--dead {
        filter: saturate(0);
      }
    }

    &-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;
    }

    &__atributes {
      grid-column: 1/3;
      display: grid;
      grid-template-columns: repeat(3, auto);
      grid-template-rows: repeat(2, auto);
      justify-content: space-between;
      gap: 10px;
    }

    &__stat {
      &-container {
        display: flex;
        flex-direction: column;
      }

      &-title {
        text-transform: capitalize;
        color: ${(props) => props.theme.color.ink.base};
        font-size: ${(props) => props.theme.font.main.sizes.display};
        font-weight: ${(props) => props.theme.font.main.weights.bold};
      }

      &-value {
        color: ${(props) => props.theme.color.ink.base};
        font-size: ${(props) => props.theme.font.main.sizes.display};
        font-weight: ${(props) => props.theme.font.main.weights.regular};
        background-color: ${(props) => props.theme.color.whites.lightest};
        border-radius: ${(props) => props.theme.size.borderRadius.small};
        border: 1px solid ${(props) => props.theme.color.ink.darkest};
        text-align: center;
        max-width: 55px;
      }
    }

    &__name {
      font-size: ${(props) => props.theme.font.main.sizes.display};
      font-weight: ${(props) => props.theme.font.main.weights.bold};
      color: ${(props) => props.theme.color.ink.darkest};
    }

    &__information {
      font-size: ${(props) => props.theme.font.main.sizes.display};
    }
  }

  .button {
    &-container {
      display: flex;
      justify-content: space-between;
    }
    &-icon {
      background: transparent;
      color: ${(props) => props.theme.color.ink.base};
      width: 40px;
      height: 40px;
      display: inline-flex;
      align-items: center;
      padding: 0;
    }

    &:active,
    &:hover {
      background-color: transparent;
    }
  }

  .icon {
    width: 40px;
    height: 40px;
  }
`;

export default CharacterCardStyled;
