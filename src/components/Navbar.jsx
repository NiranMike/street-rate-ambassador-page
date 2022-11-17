import React, { useState } from "react";
import country from "../images/Rectangle 2 Copy 3.png";
import arrow from "../images/Vector.svg";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  HamburgerMenu,
  NavbarLinkContainer,
  NavLinks,
  CurrencyLink,
  Logo,
  DropdownOption,
  OpenLinksButton,
  NavLinksExtended,
} from "../styles/Navbar.style";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const menuButtonHandler = () => {
    setMenu(!menu);
  };
  return (
    <NavbarContainer dropdown={menu}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo>Street Rate</Logo>
        </LeftContainer>
        <RightContainer>
          <DropdownOption>
            <img src={country} alt="" />
            <img className="arrow" src={arrow} alt="" />
          </DropdownOption>
          <NavbarLinkContainer>
            <NavLinks>Home</NavLinks>
            <NavLinks>Convert</NavLinks>
            <CurrencyLink>Currency Profile</CurrencyLink>
            <NavLinks>News</NavLinks>
            <NavLinks>Contact</NavLinks>
            <OpenLinksButton onClick={menuButtonHandler}>
              {menu ? <>&#10005;</> : <>&#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {menu &&  (
        <HamburgerMenu>
            <NavLinksExtended>Home</NavLinksExtended>
            <NavLinksExtended>Convert</NavLinksExtended>
            <NavLinksExtended>Currency Profile</NavLinksExtended>
            <NavLinksExtended>News</NavLinksExtended>
            <NavLinksExtended>Contact</NavLinksExtended>
      </HamburgerMenu>)}
    </NavbarContainer>
  );
};

export default Navbar;
