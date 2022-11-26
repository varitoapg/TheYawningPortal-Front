import { FaDAndD } from "react-icons/fa";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <FaDAndD className="header-icon" />
      <h1 className="main-title">The Yawing Portal</h1>
    </HeaderStyled>
  );
};

export default Header;
