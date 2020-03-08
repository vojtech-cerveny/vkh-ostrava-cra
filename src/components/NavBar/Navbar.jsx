import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Hamburger } from './Hamburger'
import { CancelIcon } from '../icons/CancelIcon'
import { NavItem, NavigationPanel, Switch, StyledLink } from './NavBar.styled'

export function Navbar() {
  const [openedMenu, setOpenedMenu] = useState(false)
  const [darkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
    if (darkTheme) {
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'gray'
    } else {
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
    }
  })

  return (
    <>
      <div className="omg">
        <div onClick={() => setOpenedMenu(true)}>
          <Hamburger />
        </div>

        <Switch>
          <input type="checkbox" onClick={() => setDarkTheme(!darkTheme)} />
          <div className="switch"></div>
        </Switch>
      </div>
      <NavigationPanel
        style={{
          visibility: openedMenu ? 'visible' : 'hidden',
          transition: `all 400ms ${openedMenu ? 'ease-in' : 'ease-out'}`,
          transform: openedMenu ? 'none' : 'translate(  100%, 0)',
        }}
      >
        <div
          style={{ padding: '20px 20px 0 0', textAlign: 'right' }}
          onClick={() => setOpenedMenu(false)}
        >
          <CancelIcon />
        </div>
        <NavItem>
          <StyledLink to="/" onClick={() => setOpenedMenu(false)}>
            Domů
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/rada" onClick={() => setOpenedMenu(false)}>
            Rada
          </StyledLink>
        </NavItem>

        <NavItem>Kalendář</NavItem>
        <NavItem>FOTOGALERIE</NavItem>
        <NavItem>Ples</NavItem>
        <NavItem>
          <StyledLink
            to="/duchovni-zivot-v-ostrave"
            onClick={() => setOpenedMenu(false)}
          >
            Duchovní život v Ostravě
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/vkh-v-cr" onClick={() => setOpenedMenu(false)}>
            VKH v ČR
          </StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/kontakt" onClick={() => setOpenedMenu(false)}>
            Kontakt
          </StyledLink>
        </NavItem>
      </NavigationPanel>
      <div
        className="sidenav-overlay"
        style={{
          opacity: openedMenu ? 1 : 0,
          visibility: openedMenu ? 'visible' : 'hidden',
          transition: `all 400ms ${openedMenu ? 'ease-in' : 'ease-out'}`,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 997,
        }}
        onClick={() => setOpenedMenu(false)}
      ></div>
    </>
  )
}
