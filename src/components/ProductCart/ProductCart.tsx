import React from 'react'
import './ProductCart.css'

type ProductCartProps = {
    image: string
    title: string
    subtitle: string
    rating: number
    price: number
    ifMask?:boolean
}

const ProductCart = ({ image, title, subtitle, rating, price, ifMask = true }: ProductCartProps) => {
    return (
        <div className='product-cart'>
            <div className= {ifMask ? "product-cart-img" : "" }><img src={image} alt="product-img" /></div>
            <div className="product-cart-title">{title}</div>
            <div className="product-cart-subtitle">{subtitle}</div>
            <div className="product-cart-ratings d-f">
                <div className={rating > 0 ? "ratings-item ratings-item__first" : "ratings-item" } ></div>
                <div className={rating > 1 ? "ratings-item ratings-item__second" : "ratings-item" } ></div>
                <div className={rating > 2 ? "ratings-item ratings-item__third" : "ratings-item" } ></div>
            </div>
            <div className="price-wr d-f jc-sb align-center">
                <div className="product-cart-price">From Price ${price}</div>
                <div><img src="images/shopping-basket.png" alt="shopping-basket" /></div>
            </div>
        </div>
    )
}

export default ProductCart