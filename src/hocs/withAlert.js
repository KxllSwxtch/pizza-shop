import React from 'react';
import Snackbar from '@material-ui/core/Snackbar/Snackbar';
import { Container, makeStyles } from '@material-ui/core';

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
    const classes = useStyles();

    const openAlert = () => {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 1500);
    };
    const closeAlert = () => setOpen(false);

    return (
      <Container className={classes.root}>
        <WrappedComponent
          openAlert={openAlert}
          closeAlert={closeAlert}
          {...props}
        />
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          open={open}
          onClose={closeAlert}
          message="Item added to cart"
          ContentProps={{ className: classes.snackbar }}
        />
      </Container>
    );
  };
}

export default withAlert;
