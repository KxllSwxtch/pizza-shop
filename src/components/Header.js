import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { CHANGE_SEARCH_VALUE } from '@ActionTypes';
import Login from './Login';
import CurrencySelect from './CurrencySelect';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontWeight: 'bolder',
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    navigation: {
      marginLeft: 20,
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      cursor: 'pointer',
      transition: 'transform 300ms ease-out',
      '&:hover': {
        transform: 'scale(1.07)',
      },
    },
    link: {
      color: theme.palette.primary.contrastText,
      textDecoration: 'none',
    },
    currencyButton: {},
  }),
);

function Header() {
  const [isMainPage, setIsMainPage] = React.useState(false);
  const searchValue = useSelector((state) => state.shop.searchValue);
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChange = (e) =>
    dispatch({ type: CHANGE_SEARCH_VALUE, searchValue: e.target.value });

  React.useEffect(() => {
    if (history.location.pathname === '/') setIsMainPage(true);
  }, [history]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/" className={classes.link}>
              Pizza Shop
            </Link>
          </Typography>
          <CurrencySelect />
          {isMainPage && (
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                value={searchValue}
                onChange={handleChange}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          )}
          <div className={classes.navigation}>
            <Link to="/cart" className={classes.link}>
              <ShoppingCartIcon className={classes.icon} />
            </Link>
            <Login />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
