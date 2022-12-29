import { NavBar, scrollNav, NavBarContainer, MobileIcon, NavItem, NavLinkRight, NavLinkLeft, NavMenu, NavLogoContainer } from './Nav-styles.js'
import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'


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
                      <NavLinkLeft to='/contact'>Contact</NavLinkLeft>
                    </NavItem>
                    <NavItem>
                      <NavLinkLeft to='/cq'>FAQ</NavLinkLeft>
                    </NavItem>
                    <NavItem>
                      <NavLogoContainer to='/'>
                        SOAR
                      </NavLogoContainer>
                    </NavItem>
                    <NavItem>
                      <NavLinkRight to='/service'>Services</NavLinkRight>
                    </NavItem>
                    <NavItem>
                      <NavLinkRight to='/blog'>Blog</NavLinkRight>
                    </NavItem>
                  </NavMenu>
                </NavBarContainer>
              </NavBar>
            </IconContext.Provider>
          </React.Fragment>
      )
}

export default Nav