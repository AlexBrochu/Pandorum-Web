import React from 'react'
import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'
import './Navbar.scss'

type CommonNavbarProps = {}

const CommonNavbar: React.FunctionComponent<CommonNavbarProps> = (
  props: CommonNavbarProps
): any => {
  return (
    <>
      <NavbarDesktop></NavbarDesktop>
      <NavbarMobile></NavbarMobile>
    </>
  )
}

export default CommonNavbar
{
  /* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">{t('brand')}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link active={location.pathname == '/'} href="/">
            {t('home')}
          </Nav.Link>
          <Nav.Link active={location.pathname == '/roadmap'} href="/roadmap">
            {t('roadmap')}
          </Nav.Link>
          <Nav.Link active={location.pathname == '/news'} href="/news">
            {t('news')}
          </Nav.Link>
          <Nav.Link
            active={location.pathname == '/discussions'}
            href="/discussions"
          >
            {t('discussions')}
          </Nav.Link>
        </Nav>
        <Nav>
          <Button onClick={() => handleClick()} variant="primary">
            {lang.toUpperCase()}
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar> */
}
