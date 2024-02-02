const ListingItem = ({url, src, title, currency, price, quantity}) => {
    let currentCurrency = `${price} GPB`;
    if (currency === 'EUR') {
        currentCurrency = `€${price}`
    }
    if (currency === 'USD') {
        currentCurrency = `$${price}`
    }

    let quantityClass = 'item=quantity';
    if (quantity > 20) {
        quantityClass += 'level-high'
    }
    if (quantity <= 10) {
        quantityClass += 'level=low'
    }
    if (quantity <= 20) {
        quantityClass += 'level=medium'
    }

    return(
      <div class="item-list">
        <div class="item">
          <div class="item-image">
            <a href={url}>
              <img src={src} alt="image"/>
            </a>
          </div>
          <div class="item-details">
            <p class="item-title">{title}</p>
            <p class="item-price">{currentCurrency}</p>
            <p class={quantityClass}>{quantity}</p>
          </div>
        </div>
      </div> 
    );
}

export default ListingItem;