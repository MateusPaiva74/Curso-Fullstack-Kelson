import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <Link to="/">Inicial</Link><br/>
        <Link to="/noticias">Noticias</Link><br/>
        <Link to="/dpo-lgpd">LGPD</Link><br/>
    </div>
  )
}

export default NavBar