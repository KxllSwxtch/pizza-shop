import React from 'react';
import { useHistory } from 'react-router-dom';
import { AuthConfig } from 'react-use-auth';
import { Auth0 } from 'react-use-auth/auth0';

function withAuth(WrappedComponent) {
  return (props) => {
    const history = useHistory();
    return (
      <React.Fragment>
        <AuthConfig
          authProvider={Auth0}
          navigate={history.push}
          params={{
            domain: 'dmitriyshinio.auth0.com',
            clientID: 'JIiiTgYGBD6X4dnxzFa3g75H6rNP5eTX',
          }}
        />
        <WrappedComponent {...props} />
      </React.Fragment>
    );
  };
}

export default withAuth;
