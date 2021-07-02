import React from 'react'
import { useHistory } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { getConfig } from '../utils/config'

const Auth0ProviderWithHistory: React.FunctionComponent<any> = ({
  children,
}: any): any => {
  // Please see https://auth0.github.io/auth0-react/interfaces/auth0provideroptions.html
  // for a full list of the available properties on the provider
  const config = getConfig()

  const providerConfig = {
    domain: config.domain,
    clientId: config.clientId,
    ...(config.audience ? { audience: config.audience } : null),
    redirectUri: window.location.origin,
    onRedirectCallback: (appState: any) => {
      history.push(appState?.returnTo || window.location.pathname)
    },
  }

  const history = useHistory()

  return <Auth0Provider {...providerConfig}>{children}</Auth0Provider>
}

export default Auth0ProviderWithHistory
