import { Button, makeStyles } from '@material-ui/core';
import { useAuth } from 'react-use-auth';

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: 20,
  },
}));

function Login() {
  const { isAuthenticated, login, logout } = useAuth();
  const classes = useStyles();

  const authenticated = isAuthenticated();
  return (
    <Button
      variant="contained"
      onClick={authenticated ? logout : login}
      className={classes.root}
    >
      {authenticated ? 'Logout' : 'Login'}
    </Button>
  );
}

export default Login;
