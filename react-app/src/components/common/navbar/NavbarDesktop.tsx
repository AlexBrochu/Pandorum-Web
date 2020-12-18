import React, { useState } from 'react'
import useWindowSize from '../../../hooks/useWindowSize'
import ProfileDropdownDesktop from './ProfileDropdownDesktop'
import { useTranslation } from 'react-i18next'
import { useLocation, Link } from 'react-router-dom'
import logo from '../../../assets/mario-mushroom.png'

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
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 brand-nav">
              <Link to="/" className="text-white">
                <img className="w-6 h-6 inline-block" src={logo} />
                <span className="inline-block ml-2">{t('brand')}</span>
              </Link>
            </div>
          </div>
          <div className="links md:block">
            <div className="flex items-baseline space-x-4 justify-center">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <Link to="/" className={location.pathname == '/' ? 'active' : ''}>
                {t('home')}
              </Link>

              <Link
                to="/roadmap"
                className={location.pathname == '/roadmap' ? 'active' : ''}
              >
                {t('roadmap')}
              </Link>

              <Link
                to="/news"
                className={location.pathname == '/news' ? 'active' : ''}
              >
                {t('news')}
              </Link>

              <Link
                to="/discussions"
                className={location.pathname == '/discussions' ? 'active' : ''}
              >
                {t('discussions')}
              </Link>
            </div>
          </div>
          <div className="md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {/* <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">View notifications</span>
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
              </button> */}
              {/* <ProfileDropdownDesktop></ProfileDropdownDesktop> */}
              <button
                onClick={() => handleClick()}
                className="ml-3 bg-gray-800 p-1 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Change Language</span>
                <div className="h-6 w-6">{lang.toUpperCase()}</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarDesktop
