import React from 'react';

function Products({ title, description, price }) {
  return (
    <div className='products'>
      <h2>{title}</h2>
      <h2>{description}</h2>
      <h2>${price}</h2>
    </div>
  );
}

export default Products;
