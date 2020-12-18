import { Container, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    color: theme.palette.grey.A200,
    height: 70,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container>
        <Typography>Copyright@2020</Typography>
      </Container>
    </footer>
  );
}

export default Footer;
