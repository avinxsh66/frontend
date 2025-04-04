import React from "react";
import "../styles/ProductCard.css"; // Add styles for the card

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductCard;
