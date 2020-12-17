import React, { useState, useRef } from 'react'
import useResize from '../../../hooks/useResize'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import NavbarMobileMenu from './NavbarMobileMenu'

type NavbarMobileProps = {}

const NavbarMobile: React.FunctionComponent<NavbarMobileProps> = (
  props: NavbarMobileProps
): any => {
  const nodeRef = useRef()
  const { width, height } = useResize(nodeRef)
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
    <nav className="bg-gray-800 sm:hidden">
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
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* <!-- Mobile menu button --> */}
            <button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {/* <!--
              Heroicon name: menu

              Menu open: "hidden", Menu closed: "block"
            --> */}
              <svg
                className="block h-6 w-6"
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
                className="hidden h-6 w-6"
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
      <NavbarMobileMenu></NavbarMobileMenu>
    </nav>
  )
}

export default NavbarMobile
