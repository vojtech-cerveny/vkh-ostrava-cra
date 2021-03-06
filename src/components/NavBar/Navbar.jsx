import React, { useState, useEffect } from 'react'
import { Hamburger } from './Hamburger'
import { CancelIcon } from '../icons/CancelIcon'
import { NavItem, NavigationPanel, Switch, StyledLink } from './NavBar.styled'

export function Navbar(props) {
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
        {props.wordpressMenu.map(({ id, path, title }) => (
          <NavItem key={id}>
            <StyledLink to={path} onClick={() => setOpenedMenu(false)}>
              {title}
            </StyledLink>
          </NavItem>
        ))}
        <NavItem>Kalendář</NavItem>
        <NavItem>FOTOGALERIE</NavItem>
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
