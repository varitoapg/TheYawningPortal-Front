import styled from "styled-components";

const CharacterCardStyled = styled.li`
  background-color: ${(props) => props.theme.color.whites.base};
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: ${(props) => props.theme.size.borderRadius.regular};
  border: 1px solid ${(props) => props.theme.color.ink.lightest};
  padding: 11px 22px;
  max-width: 350px;
  min-width: 280px;
  width: 100%;

  a {
    margin: 0 auto;
  }
  .character {
    &-state {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &__image {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border: 5px solid ${(props) => props.theme.color.characterClass.sorcerer};
      object-fit: cover;
      object-position: top;
      margin: 0 auto;

      &--dead {
        filter: saturate(0);
      }
    }

    &-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
      text-transform: capitalize;
    }

    &__atributes {
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
        text-align: center;
        color: ${(props) => props.theme.color.ink.base};
        font-size: ${(props) => props.theme.font.main.sizes.display};
        font-weight: ${(props) => props.theme.font.main.weights.bold};
      }

      &-value {
        font-size: ${(props) => props.theme.font.main.sizes.display};
        font-weight: ${(props) => props.theme.font.main.weights.regular};
        background-color: ${(props) => props.theme.color.whites.lightest};
        border-radius: ${(props) => props.theme.size.borderRadius.small};
        border: 1px solid ${(props) => props.theme.color.ink.darkest};
        text-align: center;
        min-width: 66px;
      }
    }

    &__name {
      font-size: ${(props) => props.theme.font.main.sizes.display};
      font-weight: ${(props) => props.theme.font.main.weights.bold};
      color: ${(props) => props.theme.color.ink.base};
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
