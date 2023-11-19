import React from 'react'
import Link from 'next/link'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='nav-container'>
      <ul className='nav-ul'>
        <li className='nav-li'>
          <Link href="/" className='lien'>Unités</Link>
        </li>
        <li className='nav-li'>
          <Link href="/regles" className='lien'>Règles</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar