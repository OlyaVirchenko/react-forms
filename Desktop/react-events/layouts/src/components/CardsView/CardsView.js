import classes from './CardsView.module.css'
import ShopCard from "./ShopCard/ShopCard";

const CardView = (props) => {
    return(
        <div className={classes['card-container']}>
            {props.products.map(product => 
               <ShopCard 
                 key = {Math.random()}
                 product = {product}
            />)}
        </div>
    )
}

export default CardView;