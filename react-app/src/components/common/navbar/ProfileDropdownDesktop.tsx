import React, { useState } from 'react'
import { Link } from 'react-router-dom'

type ProfileDesktopProps = {}

const ProfileDesktop: React.FunctionComponent<ProfileDesktopProps> = (
  props: ProfileDesktopProps
): any => {
  const [clicked, setClicked] = useState(false)

  function handleClickProfile() {
    if (clicked) setClicked(false)
    else setClicked(true)
  }

  return (
    <div className="md:block">
      {/* <!-- Profile dropdown --> */}
      <div className="ml-3 relative">
        <div>
          <button
            onFocus={() => handleClickProfile()}
            onBlur={() => handleClickProfile()}
            className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            id="user-menu"
            aria-haspopup="true"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </button>
        </div>
        {/* <!--
                Profile dropdown panel, show/hide based on dropdown state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              --> */}
        <div
          className={`${
            clicked ? 'focus' : ''
          } profile-menu-hover origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu"
        >
          <Link
            to="/profile"
            className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
            role="menuitem"
          >
            Your Profile
          </Link>

          <Link
            to="/settings"
            className="block px-4 py-2 text-sm  text-black hover:bg-gray-100"
            role="menuitem"
          >
            Settings
          </Link>

          <Link
            to="/"
            className="block px-4 py-2 text-sm  text-black hover:bg-gray-100"
            role="menuitem"
          >
            Sign out
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProfileDesktop
