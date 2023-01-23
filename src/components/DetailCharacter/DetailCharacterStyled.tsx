import styled from "styled-components";

const DetailCharacterStyled = styled.article`
  border: 1px solid ${(props) => props.theme.color.whites.darkest};
  border-radius: ${(props) => props.theme.size.borderRadius.regular};
  padding: ${(props) => props.theme.size.padding.overall} 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  .button {
    margin: 0;
  }
  .icon {
    background: transparent;
    color: ${(props) => props.theme.color.ink.base};
    width: 40px;
    height: 40px;
    padding: 0;
  }

  .character-actions {
    &-container {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
  }
  .character-image {
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
      grid-column: 1 / -1;
    }
  }

  .character-information {
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(3, auto);
    display: grid;
    align-items: baseline;
    justify-content: start;
    gap: 5px;
    width: 100%;

    &__label {
      color: ${(props) => props.theme.color.ink.base};
      font-size: ${(props) => props.theme.font.main.sizes.headline};
      font-weight: ${(props) => props.theme.font.main.weights.bold};
      text-transform: capitalize;
      margin-right: 5px;
    }

    &__value {
      display: block;
      font-size: ${(props) => props.theme.font.main.sizes.title};
      text-transform: capitalize;
      min-width: 100%;
      max-width: 360px;
    }
  }

  .secondary-stats {
    background-color: ${(props) => props.theme.color.whites.light};
    border: 1px solid ${(props) => props.theme.color.whites.darkest};
    border-radius: ${(props) => props.theme.size.borderRadius.small};
    padding: 16px 10px;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    width: 100%;
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
      min-width: 66px;
    }

    &-container {
      display: flex;
      flex-direction: column-reverse;
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

    &__value {
      background-color: ${(props) => props.theme.color.whites.base};
      color: ${(props) => props.theme.color.ink.base};
      font-size: ${(props) => props.theme.font.main.sizes.display};
      text-align: center;
      vertical-align: middle;
      border: none;
      min-width: 50px;
      min-height: 50px;
      max-width: 75px;
      max-height: 75px;
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

  .character-story {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid ${(props) => props.theme.color.whites.darkest};
    border-radius: ${(props) => props.theme.size.borderRadius.regular};
    padding: ${(props) => props.theme.size.padding.overall} 10px;
    background-color: ${(props) => props.theme.color.whites.base};
    width: 100%;

    &__label {
      color: ${(props) => props.theme.color.ink.base};
      font-size: ${(props) => props.theme.font.main.sizes.title};
      font-weight: ${(props) => props.theme.font.main.weights.bold};
      text-transform: capitalize;
    }

    &__value {
      color: ${(props) => props.theme.color.ink.base};
      min-width: 100%;
      border: none;
      background-color: inherit;
      font-size: ${(props) => props.theme.font.main.sizes.title};
      color: ${(props) => props.theme.color.ink.base};

      &--background {
        text-transform: capitalize;
      }
    }
  }
`;

export default DetailCharacterStyled;
