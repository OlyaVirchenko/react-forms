import { useState } from "react";
import classes from './Store.module.css';
import CardView from "../CardsView/CardsView";
import ListView from "../ListView/ListView";
import Products from "../Products/Products";
import IconSwitch from "../IconSwitch/IconSwitch";

const Store = () => {
    const products = Products;
    const [IsCardView, setCardView] = useState(false);

    const onSwitchCardHandle = () => {
        setCardView(!IsCardView) ;
    }

    return (
        <div className={classes.container}>
            <IconSwitch icon = {IsCardView ?  'view_list' : 'view_module'} onClick={onSwitchCardHandle} />
            {IsCardView ? <CardView products={products}/> : <ListView products={products}/>}
        </div>
    )
}

export default Store;