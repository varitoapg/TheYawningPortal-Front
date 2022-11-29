import { FaDAndD } from "react-icons/fa";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  const paths = ["/login", "/register"];
  const texts = ["Login", "Register"];

  return (
    <HeaderStyled>
      <div className="title-container">
        <FaDAndD className="header-icon" />
        <h1 className="main-title">The Yawning Portal</h1>
      </div>
      <NavigationMenu paths={paths} texts={texts} />
    </HeaderStyled>
  );
};

export default Header;
