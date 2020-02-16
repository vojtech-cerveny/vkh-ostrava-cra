import React, { useState } from 'react'
import { Hamburger } from './Hamburger'
import { CancelIcon } from '../icons/CancelIcon'
import { NavItem, NavigationPanel, Switch } from './NavBar.styled'

export function Navbar() {
  const [menu, setMenu] = useState(false)
  let dark = false
  function setDark(bool) {
    dark = !dark

    if (bool) {
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'gray'
    } else {
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
    }
  }

  return (
    <>
      <div>
        <div onClick={() => setMenu(true)}>
          <Hamburger />
        </div>

        <Switch>
          <input type="checkbox" onClick={() => setDark(dark)} />
          <div className="switch"></div>
        </Switch>
      </div>
      <NavigationPanel
        style={{
          visibility: menu ? 'visible' : 'hidden',
          transition: `all 400ms ${menu ? 'ease-in' : 'ease-out'}`,
          transform: menu ? 'none' : 'translate(  100%, 0)',
        }}
      >
        <div
          style={{ padding: '20px 20px 0 0', textAlign: 'right' }}
          onClick={() => setMenu(false)}
        >
          <CancelIcon />
        </div>
        <NavItem>Rada</NavItem>
        <NavItem>Kalendář</NavItem>
        <NavItem>FOTOGALERIE</NavItem>
        <NavItem>Ples</NavItem>
        <NavItem>Duchovní život v Ostravě</NavItem>
        <NavItem>Kontakt</NavItem>
        <NavItem>VKH v ČR</NavItem>
      </NavigationPanel>
      <div
        className="sidenav-overlay"
        style={{
          opacity: menu ? 1 : 0,
          visibility: menu ? 'visible' : 'hidden',
          transition: `all 400ms ${menu ? 'ease-in' : 'ease-out'}`,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 997,
        }}
        onClick={() => setMenu(false)}
      ></div>
    </>
  )
}
