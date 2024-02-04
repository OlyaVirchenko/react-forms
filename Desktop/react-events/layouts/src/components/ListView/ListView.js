
import ShopItem from "./ShopItem/ShopItem";
const ListView = (props) => {
 return (
   <div>
    {props.products?.map(product =>
      <ShopItem
        key={Math.random()}
        product={product}
      />)}
   </div>
 )
}

export default ListView;