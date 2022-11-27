import styled from "styled-components";

const LoadingStyled = styled.div`
  padding: ${(props) => props.theme.size.padding.overall};
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
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.9);

  .diceLoader {
    width: 186px;
    height: 186px;
  }

  .breathe {
    animation: breathe 5s infinite;
  }
  .first {
    animation-delay: 0.6s;
  }
  .second {
    animation-delay: 1.2s;
  }
  .third {
    animation-delay: 1.8s;
  }
  .fourth {
    animation-delay: 2.4s;
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