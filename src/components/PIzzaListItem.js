import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useDispatch } from "react-redux";
import { GET_PIZZA_DETAILS } from "@ActionTypes";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
    padding: 0,
  },
  link: {
    textDecoration: "none",
  },
});

function PizzaListItem({ data }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { id, imageURL, name, price } = data;

  return (
    <Card className={classes.root} elevation={6}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          src={imageURL}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Small: ${price.sm}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Medium: ${price.md}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Large: ${price.lg}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Extra Large: ${price.xl}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to cart
        </Button>
        <Link to={`/pizza/${id}`} className={classes.link}>
          <Button
            size="small"
            color="secondary"
            onClick={() => dispatch({ type: GET_PIZZA_DETAILS, pizzaID: id })}
          >
            See Details
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default PizzaListItem;
