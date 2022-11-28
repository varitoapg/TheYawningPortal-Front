import { v4 as uuidv4 } from "uuid";
import { HiBars3 } from "react-icons/hi2";
import { FaTimesCircle } from "react-icons/fa";
import { useState } from "react";
import Button from "../Button/Button";
import NavigationMenuStyled from "./NavigationMenuStyled";
import { NavLink } from "react-router-dom";
import useUser from "../../hooks/useUser/useUser";

interface NavigationMenuProps {
  paths: string[];
  texts: string[];
}

const NavigationMenu = ({ paths, texts }: NavigationMenuProps): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { userLogout } = useUser();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavigationMenuStyled>
      <div className="mobile">
        <Button
          ariaLabel="Navigation menu"
          action={toggleMenu}
          children={
            isMenuOpen ? (
              <FaTimesCircle
                aria-label="Menu closed"
                className={`menu-icon menu-navigation--close`}
              />
            ) : (
              <HiBars3
                aria-label="Menu opened"
                className={`menu-icon menu-navigation--open`}
              />
            )
          }
          classname="-navigation"
        />
        <nav>
          <ul
            className={`main-navigation__list ${
              isMenuOpen ? "show" : "hidden"
            }`}
          >
            {texts.map((text, index) => (
              <li key={uuidv4()} className="main-navigation__option">
                {text === "Logout" ? (
                  <Button
                    ariaLabel="Log out"
                    children={text}
                    action={userLogout}
                    classname="--logout"
                  />
                ) : (
                  <NavLink
                    aria-label={`Go to ${text}`}
                    to={paths[index]}
                    onClick={toggleMenu}
                    className="main-navigation__link"
                  >
                    {text}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="desktop">
        <nav>
          <ul className={`main-navigation__list`}>
            {texts.map((text, index) => (
              <li key={uuidv4()} className="main-navigation__option">
                {text === "Logout" ? (
                  <Button
                    children={text}
                    action={userLogout}
                    classname="--logout"
                  />
                ) : (
                  <NavLink
                    to={paths[index]}
                    onClick={toggleMenu}
                    className="main-navigation__link"
                  >
                    {text}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </NavigationMenuStyled>
  );
};

export default NavigationMenu;
