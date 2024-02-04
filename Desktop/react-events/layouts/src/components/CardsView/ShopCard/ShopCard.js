import classes from './ShopCard.module.css';
import Button from '../../Button/Button';

const ShopCard = (props) => {
   const {name, price, color, img} = props.product;
   return (
    <div className={classes.card}>
        <h1 className = {classes.title}>{name}</h1>
        <h2 className = {classes.color}>{color}</h2>
        <div className= {classes['image-container']}>
            <img className={classes.image} src={img} alt="" />
        </div>
        <div className={classes.footer}>
          <div className={classes.price}>${price}</div>
          <Button title = "add to cart" />
        </div>
    </div>
   )
}

export default ShopCard;