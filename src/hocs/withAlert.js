import React from 'react';
import Snackbar from '@material-ui/core/Snackbar/Snackbar';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 100,
  },
  snackbar: {
    background: theme.palette.secondary.light,
  },
}));

function withAlert(WrappedComponent) {
  return (props) => {
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const classes = useStyles();

    const openAlert = (message = '') => {
      setOpen(true);
      setMessage(message);
      setTimeout(() => {
        setOpen(false);
      }, 1500);
    };

    const closeAlert = () => setOpen(false);

    return (
      <React.Fragment>
        <WrappedComponent
          openAlert={openAlert}
          closeAlert={closeAlert}
          {...props}
        />
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          open={open}
          onClose={closeAlert}
          message={message}
          ContentProps={{ className: classes.snackbar }}
        />
      </React.Fragment>
    );
  };
}

export default withAlert;
