import { FaDAndD } from "react-icons/fa";
import { useAppSelector } from "../../redux/hooks";
import {
  isLoggedOptions,
  NavigationOptionsStructure,
  notLogguedOptions,
} from "../../resources/navigationOptions";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  const isLogged = useAppSelector((state) => state.user.isLogged);
  const navigationOptions: NavigationOptionsStructure = isLogged
    ? isLoggedOptions
    : notLogguedOptions;

  return (
    <HeaderStyled>
      <div className="title-container">
        <FaDAndD className="header-icon" />
        <h1 className="main-title">The Yawning Portal</h1>
      </div>
      <NavigationMenu
        paths={navigationOptions.paths}
        texts={navigationOptions.texts}
      />
    </HeaderStyled>
  );
};

export default Header;
