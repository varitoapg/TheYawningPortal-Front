import styled from "styled-components";

const NotFoundStyled = styled.div`
  padding: ${(props) => props.theme.size.padding.overall};

  .notFound {
    > span {
      display: block;
    }
    &__container {
      display: flex;
      flex-direction: column;
      background-color: ${(props) => props.theme.color.whites.base};
      border: 1px solid ${(props) => props.theme.color.ink.lightest};
      border-radius: ${(props) => props.theme.size.borderRadius.big};
      padding: 18px 10px;
    }

    &__title {
      font-size: ${(props) => props.theme.font.main.sizes.display};
      font-weight: ${(props) => props.theme.font.main.weights.bold};
      color: ${(props) => props.theme.color.ink.base};
      margin-bottom: 21px;
    }

    &__information {
      display: flex;
      flex-direction: column;
      gap: 20px;
      font-size: ${(props) => props.theme.font.main.sizes.headline};
      font-weight: ${(props) => props.theme.font.main.weights.regular};
      color: ${(props) => props.theme.color.ink.base};
    }
  }

  .return {
    font-size: ${(props) => props.theme.font.main.sizes.headline};
    font-weight: ${(props) => props.theme.font.main.weights.regular};
    color: ${(props) => props.theme.color.ink.base};
    margin-top: 20px;
    &__link {
      text-decoration: underline;
      font-size: ${(props) => props.theme.font.main.sizes.headline};
      color: ${(props) => props.theme.color.primary.base};
      margin-left: 5px;
    }
  }

  @media only screen and (min-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export default NotFoundStyled;
