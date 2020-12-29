import React from 'react'
import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'
import './Navbar.scss'

type CommonNavbarProps = {}

const CommonNavbar: React.FunctionComponent<CommonNavbarProps> = (
  props: CommonNavbarProps
): any => {
  return (
    <div className="navbar">
      <NavbarDesktop></NavbarDesktop>
      <NavbarMobile></NavbarMobile>
    </div>
  )
}

export default CommonNavbar
