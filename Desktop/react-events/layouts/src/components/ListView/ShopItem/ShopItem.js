import Button from '../../Button/Button';
import classes from './ShopItem.module.css';

const ShopItem = (props) => {
   const {name, price, color, img} = props.product;
   return (
    <div className={classes.card}>
        <div className= {classes['image-container']}>
            <img className={classes.image} src={img} alt="" />
        </div>
        <h1 className = {classes.title}>{name}</h1>
        <h2 className = {classes.color}>{color}</h2>
        <div className={classes.price}>${price}</div>
        <Button title = "add to cart" />
    </div>
   )
}

export default ShopItem;