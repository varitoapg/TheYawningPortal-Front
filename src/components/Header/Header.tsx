import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDAndD } from "@fortawesome/free-brands-svg-icons";
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
        <FontAwesomeIcon icon={faDAndD} className="header-icon" />
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
