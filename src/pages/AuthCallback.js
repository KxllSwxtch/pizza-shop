import React from 'react';
import { Typography } from '@material-ui/core';
import { useAuth } from 'react-use-auth';

function AuthCallback() {
  const { handleAuthentication } = useAuth();

  React.useEffect(() => {
    handleAuthentication();
  }, [handleAuthentication]);

  return (
    <Typography variant="h1">
      This is an authentication callback page
    </Typography>
  );
}

export default AuthCallback;
