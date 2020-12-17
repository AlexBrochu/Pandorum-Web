import React, { useState, useRef } from 'react'
import useWindowSize from '../../../hooks/useWindowSize'
import ProfileDropdownDesktop from './ProfileDropdownDesktop'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { cli } from 'webpack'

type NavbarDesktopProps = {}

const NavbarDesktop: React.FunctionComponent<NavbarDesktopProps> = (
  props: NavbarDesktopProps
): any => {
  const { width, height } = useWindowSize()
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
    <nav className={`bg-gray-800 ${width >= 640 ? '' : 'hidden'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
            </div>
            <div className="md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <a
                  href="#"
                  className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Team
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Projects
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Calendar
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Reports
                </a>
              </div>
            </div>
          </div>
          <div className="md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">View notifications</span>
                {/* <!-- Heroicon name: bell --> */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <ProfileDropdownDesktop></ProfileDropdownDesktop>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarDesktop
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
