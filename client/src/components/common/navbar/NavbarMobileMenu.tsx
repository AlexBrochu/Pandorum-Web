import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, Link } from 'react-router-dom'

type NavbarMobileMenuProps = {
  show: boolean
  handleToggle: Function
}

const NavbarMobileMenu: React.FunctionComponent<NavbarMobileMenuProps> = (
  props: NavbarMobileMenuProps
): any => {
  const { t } = useTranslation('nav')
  const location = useLocation()

  return (
    <div className={`${props.show ? '' : 'hidden'} navbar-mobile md:hidden`}>
      {/* <!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
    --> */}
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
        <Link
          to="/"
          className={location.pathname == '/' ? 'active' : ''}
          onClick={() => props.handleToggle()}
        >
          {t('home')}
        </Link>

        <Link
          to="/roadmap"
          className={location.pathname == '/roadmap' ? 'active' : ''}
          onClick={() => props.handleToggle()}
        >
          {t('roadmap')}
        </Link>

        <Link
          to="/news"
          className={location.pathname == '/news' ? 'active' : ''}
          onClick={() => props.handleToggle()}
        >
          {t('news')}
        </Link>

        <Link
          to="/qa"
          className={location.pathname == '/discussions' ? 'active' : ''}
          onClick={() => props.handleToggle()}
        >
          {t('discussions')}
        </Link>
      </div>
      <div className="hidden pt-4 pb-3 border-t border-gray-700">
        <div className="flex items-center px-5">
          <div className="flex-shrink-0">
            {/* <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            /> */}
          </div>
          <div className="ml-3">
            {/* <div className="text-base font-medium leading-none text-white">
              Tom Cook
            </div>
            <div className="text-sm font-medium leading-none text-gray-400">
              tom@example.com
            </div> */}
          </div>
        </div>
        <div className="mt-3 px-2 space-y-1">
          <Link
            to="/profile"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            Your Profile
          </Link>

          <Link
            to="/settings"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            Settings
          </Link>

          <Link
            to="/"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            Sign out
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavbarMobileMenu
