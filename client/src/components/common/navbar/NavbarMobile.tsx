import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import NavbarMobileMenu from './NavbarMobileMenu'
import logo from '../../../assets/Pandorum_feather_blood_bk.ico'

type NavbarMobileProps = {}

const NavbarMobile: React.FunctionComponent<NavbarMobileProps> = (
  props: NavbarMobileProps
): any => {
  const { t, i18n } = useTranslation('nav')
  const [lang, setLang] = useState('fr')
  const [toggle, setToggle] = useState(false)

  function handleClick() {
    if (lang === 'fr') {
      setLang('en')
    } else {
      setLang('fr')
    }
    i18n.changeLanguage(lang)
  }

  function handleOpenMenu() {
    if (toggle) setToggle(false)
    else setToggle(true)
  }

  return (
    <nav className="sm:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-white">
                <img className="w-6 h-6 inline-block" src={logo} />
                <span className="inline-block ml-2">{t('brand')}</span>
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => handleClick()}
              className="mr-3 bg-gray-800 p-1 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Change Language</span>
              <div className="h-6 w-8">{lang.toUpperCase()}</div>
            </button>
            {/* <!-- Mobile menu button --> */}
            <button
              onClick={() => handleOpenMenu()}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {/* <!--
              Heroicon name: menu

              Menu open: "hidden", Menu closed: "block"
            --> */}
              <svg
                className={`${toggle ? 'hidden' : 'block'} h-6 w-6`}
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* <!--
              Heroicon name: x

              Menu open: "block", Menu closed: "hidden"
            --> */}
              <svg
                className={`${toggle ? 'block' : 'hidden'} h-6 w-6`}
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <NavbarMobileMenu
        show={toggle}
        handleToggle={handleOpenMenu}
      ></NavbarMobileMenu>
    </nav>
  )
}

export default NavbarMobile
