import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, title, price, rating, image}) {

    const [{basket},dispatch] = useStateValue();
    const removeFromBasket = () =>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />
            <div class="checkoutProduct__info">
                <p class="checkoutProduct__title">{title}</p>
                <p class="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div class="checkoutProduct__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) =>
                                <p>⭐</p>
                            )
                    }
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
