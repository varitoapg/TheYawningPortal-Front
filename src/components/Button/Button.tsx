import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  children: JSX.Element | JSX.Element[] | string;
  classname?: string;
  action?: () => void;
  isDisable?: boolean;
  ariaLabel?: string;
}

const Button = ({
  children,
  action,
  isDisable,
  classname,
  ariaLabel,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      className={`button button${classname}`}
      onClick={action}
      disabled={isDisable}
      aria-label={ariaLabel}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
