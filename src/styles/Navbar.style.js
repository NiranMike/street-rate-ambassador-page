import styled from "styled-components";
import PropTypes from 'prop-types'

export const NavbarContainer = styled.nav`
  background-color: #f8fafc;
  height: ${({dropdown})=> (dropdown ? "100vh" : "80px")};

  @media (min-width: 834px) {
    background-color: #fff;
  }
  @media (min-width: 766px){
    height: 80px;
  }
`;

NavbarContainer.propTypes = {
    dropdown: PropTypes.bool,
}

export const LeftContainer = styled.div`
  display: flex;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const NavbarInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 80px;
  margin-right: 80px;
  @media (max-width: 480px) {
    margin-left: 16px;
    margin-right: 16px;
  }
`;

export const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const DropdownOption = styled.div`
  display: flex;
  gap: 5px;
  height: 14.14px;
  cursor: pointer;

  @media (max-width: 834px) {
    display: none;
  }
`;

export const NavLinks = styled.p`
  color: #94a3b8;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const NavLinksExtended = styled.p`
  color: #94a3b8;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;

`;

export const CurrencyLink = styled(NavLinks)`
  @media (max-width: 934px) {
    display: none;
  }
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 25px;
  color: #0f172a;

  @media (min-width: 767px) {
    display: none;
  }
`;

export const Logo = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  color: #00296b;
  cursor: pointer;

  @media (min-width: 1024px) {
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 40px;
  }

  @media (max-width: 834px) {
    font-style: normal;
    font-weight: 600;
    font-size: 23px;
    line-height: 28px;
  }
`;
