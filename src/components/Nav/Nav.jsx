import { NavBar, scrollNav, NavBarContainer, MobileIcon, NavItem, NavLinkRight, NavLinkLeft, NavLogo, NavMenu, NavLogoContainer } from './Nav-styles.js'
import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import SoarLogo from '../../assets/soarlogoblack.png'



const Nav = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
      if(window.scrollY > 80) {
        setScrollNav(true)
      } else {
        setScrollNav(false)
      }
    }

    useEffect(() => {

      window.addEventListener('scroll', changeNav)

      return () => {
        window.removeEventListener('scroll', changeNav)
      }
    }, [])



  return (
          <React.Fragment>
            <IconContext.Provider value={{ color: '#010606' }}>
              <NavBar scrollNav={scrollNav}>
                <NavBarContainer>
                  <MobileIcon onClick={toggle}>
                    <FaBars />
                  </MobileIcon>
                  <NavMenu>
                    <NavItem>
                      <NavLinkLeft to='/about'>About</NavLinkLeft>
                    </NavItem>
                    <NavItem>
                      <NavLinkLeft to='/cq'>FAQ</NavLinkLeft>
                    </NavItem>
                    <NavItem>
                      <NavLogoContainer to='/'>
                        <NavLogo src={SoarLogo} />
                      </NavLogoContainer>
                    </NavItem>
                    <NavItem>
                      <NavLinkRight to='/service'>Services</NavLinkRight>
                    </NavItem>
                    <NavItem>
                      <NavLinkRight to='/service'>Blog</NavLinkRight>
                    </NavItem>
                  </NavMenu>
                </NavBarContainer>
              </NavBar>
            </IconContext.Provider>
          </React.Fragment>
      )
}

export default Nav