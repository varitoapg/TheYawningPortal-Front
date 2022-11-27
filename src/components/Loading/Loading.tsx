import LoadingStyled from "./LoadingStyled";

const Loading = (): JSX.Element => {
  return (
    <LoadingStyled>
      <svg
        data-name="5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 133.85 155.44"
        className="diceLoader"
        aria-label="Dice 20 faces loading"
      >
        <polygon
          className="breathe second second--darker"
          points="66.92 154.13 131.55 116.12 66.92 108.51 66.92 154.13"
        />
        <polygon
          className="breathe second"
          points="66.92 154.13 66.92 108.51 2.3 116.12 66.92 154.13"
        />
        <polygon
          className="breathe third"
          points="2.3 116.12 36.51 55.3 2.3 40.09 2.3 116.12"
        />
        <polygon
          className="breathe third third--darker"
          points="36.51 55.3 2.3 40.09 66.92 2.08 36.51 55.3"
        />
        <polygon
          className="breathe fourth"
          points="97.33 55.3 131.55 40.09 66.92 2.08 97.33 55.3"
        />
        <polygon
          className="breathe fourth fourth--darker"
          points="97.33 55.3 131.55 116.12 131.55 40.09 97.33 55.3"
        />
        <polygon
          className="breathe first"
          points="66.92 108.51 131.55 116.12 97.33 55.3 66.92 108.51"
        />
        <polygon
          className="breathe first"
          points="36.51 55.3 2.3 116.12 66.92 108.51 36.51 55.3"
        />
        <polygon
          className="breathe first"
          points="36.51 55.3 66.92 2.08 97.33 55.3 36.51 55.3"
        />
        <polygon
          className="breathe"
          points="66.92 108.51 97.33 55.3 36.51 55.3 66.92 108.51"
        />
      </svg>
    </LoadingStyled>
  );
};

export default Loading;
