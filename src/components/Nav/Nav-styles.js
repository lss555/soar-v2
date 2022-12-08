import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';

export const NavBar = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#189AC0' : 'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1500px;
`;

export const NavLogoContainer = styled(LinkR)`
  display: flex;
  color: #010606;
  width: 100%;
  cursor: pointer;
  font-size: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  font-weight: bold;
  text-decoration: none;
`;

export const NavLogo = styled.img`
  display: flex;
  margin: auto;

  height: 80px;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    transfrom: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #FCF3CF;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: space-evenly;

`;

export const NavLinkLeft = styled(LinkR)`
  display: flex;
  text-decoration: none;
  align-items: center;
  color: black;
  font-size: 20px;
  &.active {
    border-bottom: 3px solid rgba(188, 152, 106, 1);
  }
`;

export const NavLinkRight = styled(LinkR)`
  display: flex;
  text-decoration: none;
  align-items: center;
  color: black;
  font-size: 20px;
  &.active {
    border-bottom: 3px solid rgba(188, 152, 106, 1);
  }
`;