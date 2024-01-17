import {Component} from "react";
import PropTypes from 'prop-types';

class ShopItemClass extends Component{
    render() {
      return (
        <div class="main-content">
          <h2>{this.props.item.brand}</h2>
           <h1>{this.props.item.title}</h1>
           <h3>{this.props.item.description}</h3>
           <div class="description">
             {this.props.item.descriptionFull}
           </div>
          <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
          <div class="divider"></div>
           <div class="purchase-info">
            <div class="price">{`${this.props.item.currency}${this.props.item.price}.00`}</div>
            <button>Добавить в корзину</button>
          </div>
        </div>
      )
    }
  }

export default ShopItemClass;

ShopItemClass.propTypes = {
    item: PropTypes.shape({
      brand: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      descriptionFull: PropTypes.string,
      price: PropTypes.number,
      currency: PropTypes.string
    })
  }

