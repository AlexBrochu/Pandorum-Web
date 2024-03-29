import React from 'react'
import { Route } from 'react-router-dom'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import Loading from '../../loading/Loading'

const ProtectedRoute = ({ component, ...args }: any) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loading />,
    })}
    {...args}
  />
)

export default ProtectedRoute
