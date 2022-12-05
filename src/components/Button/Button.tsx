import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  children: JSX.Element | JSX.Element[] | string;
  classname?: string;
  action?: () => void;
  isDisable?: boolean;
  ariaLabel?: string;
  buttonType?: "button" | "submit";
}

const Button = ({
  children,
  action,
  isDisable,
  classname,
  ariaLabel,
  buttonType,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      className={`button button${classname}`}
      onClick={action}
      disabled={isDisable}
      aria-label={ariaLabel}
      type={buttonType}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
