import React from 'react';

export default function ProductCard(props) {
  const {productId, productPic, productName, Brand, productDescription, Price} = props.productDetails;
  
  function handleClick() {
    alert(`Product of ID ${productId}, which is ${productName} of brand ${Brand} priced at ${Price} has been added to cart. Please proceed to pay!`);
  }
  
  return (
    <div className="product-card">
      <img src={productPic} alt={productName} />
      <h3>{productName}</h3>
      <p>{Brand}</p>
      <p>{productDescription}</p>
      <p>Price: {Price}</p>
      <button onClick={handleClick}>Add to Cart</button>
    </div>
  );
}
