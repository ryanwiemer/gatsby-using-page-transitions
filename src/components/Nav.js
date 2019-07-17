import React from 'react'
import { Link } from 'gatsby'

const Nav = () => (
  <nav
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: '999',
      background: 'lightgray',
    }}
  >
    <ul
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        listStyle: 'none',
        margin: '0 auto',
        padding: '0 1em',
        height: '50px',
        maxWidth: 960,
      }}
    >
      <li style={{ marginRight: 'auto' }}>
        <Link to="/">Home</Link>
      </li>
      <li style={{ marginRight: '1em' }}>
        <Link to="/regular/">Regular</Link>
      </li>
      <li>
        <Link to="/animated/">Animated</Link>
      </li>
    </ul>
  </nav>
)

export default Nav
