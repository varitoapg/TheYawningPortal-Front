import styled from "styled-components";

const LoadingStyled = styled.div`
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
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.9);

  .diceLoader {
    width: 186px;
    height: 186px;
  }

  .breathe {
    animation: breathe 5s infinite;
    fill: #e08f8a;
    fill-rule: evenodd;
    stroke: #ffffff;
    stroke-miterlimit: 10;
    stroke-width: 1.5px;
  }
  .first {
    animation-delay: 0.6s;
    fill: #c11f15;
  }
  .second {
    animation-delay: 1.2s;
    fill: #9a1911;

    &--darker {
      fill-rule: evenodd;
    }
  }
  .third {
    animation-delay: 1.8s;
    fill: #9a1911;

    &--darker {
      fill: #600f0a;
      fill-rule: evenodd;
    }
  }
  .fourth {
    animation-delay: 2.4s;
    fill: #cd4c44;
    &--darker {
      fill: #600f0a;
      fill-rule: evenodd;
    }
  }

  @keyframes breathe {
    0%,
    50% {
      transform: scale(1);
      opacity: 1;
    }
    20% {
      opacity: 0.25;
    }
    33% {
      transform: scale(0.5) translate(50%, 50%);
    }
  }
`;

export default LoadingStyled;
