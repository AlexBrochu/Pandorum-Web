import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { Navbar, Nav } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

type CommonNavbarProps = {}

const CommonNavbar: React.FunctionComponent<CommonNavbarProps> = (
  props: CommonNavbarProps
): any => {
  const { t, i18n } = useTranslation('nav')
  const [lang, setLang] = useState('fr')
  const location = useLocation()

  function handleClick() {
    if (lang === 'fr') {
      setLang('en')
    } else {
      setLang('fr')
    }
    i18n.changeLanguage(lang)
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
    </Navbar>
  )
}

export default CommonNavbar
