import React, { useState } from 'react'
import { NavItem, Hamburger, Switch } from '../css/style'
import colors from '../constants/colors'

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
        <Hamburger
          onClick={() => setMenu(true)}
          style={{
            position: 'fixed',
            right: '20px',
            top: '20px',
            zIndex: 20,
            cursor: 'pointer',
          }}
        >
          <svg
            id="loading-bar"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="36"
            viewBox="0 0 50 36"
          >
            <g>
              <rect
                id="loading-bar-left"
                width="45"
                height="7"
                fill={colors.BG_DARK}
              />
              <rect
                id="loading-bar-middle"
                width="45"
                height="7"
                y="14"
                fill={colors.BG_DARK}
              />
              <rect
                id="loading-bar-right"
                width="45"
                height="7"
                y="28"
                fill={colors.BG_DARK}
              />
            </g>
          </svg>
        </Hamburger>

        <Switch
          style={{
            position: 'fixed',
            right: '20px',
            top: '70px',
            zIndex: 20,
            cursor: 'pointer',
          }}
        >
          <input type="checkbox" onClick={() => setDark(dark)} />
          <div className="switch"></div>
        </Switch>
      </div>
      <div
        style={{
          height: '100%',
          backgroundColor: 'white',
          position: 'fixed',
          right: '0',
          visibility: menu ? 'visible' : 'hidden',
          transition: `all 400ms ${menu ? 'ease-in' : 'ease-out'}`,
          transform: menu ? 'none' : 'translate(  100%, 0)',
          zIndex: 999,
          flexDirection: 'column',
          display: 'flex',
        }}
      >
        <div onClick={() => setMenu(false)}> Disable </div>
        <NavItem>Rada</NavItem>
        <NavItem>Kalendář</NavItem>
        <NavItem>FOTOGALERIE</NavItem>
        <NavItem>Ples</NavItem>
        <NavItem>Duchovní život v Ostravě</NavItem>
        <NavItem>Kontakt</NavItem>
        <NavItem>VKH v ČR</NavItem>
      </div>
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
      ></div>
    </>
  )
}
