import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { GET_PIZZA_DETAILS, ADD_TO_CART } from '@ActionTypes';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
    padding: 0,
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: 'none',
  },
  cardActions: {
    paddingBottom: 20,
    paddingLeft: 20,
  },
  cardContent: {
    paddingLeft: 20,
  },
}));

function PizzaListItem({ data, openAlert }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentCurrency = useSelector((state) => state.shop.currentCurrency);
  const { id, imageURL, name, price } = data;

  const handleAddToCart = () => {
    const cartItem = { id, name, price, quantity: 1 };
    dispatch({ type: ADD_TO_CART, cartItem });
    openAlert('Item added to cart');
  };

  return (
    <Card className={classes.root} elevation={6}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          src={imageURL}
          title={name}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Price: ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
        <Button
          size="small"
          color="secondary"
          variant="outlined"
          onClick={() => dispatch({ type: GET_PIZZA_DETAILS, pizzaID: id })}
        >
          <Link to={`/pizza/${id}`} className={classes.link}>
            See Details
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default PizzaListItem;
