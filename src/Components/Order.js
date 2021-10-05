import React from 'react';

function Order({item: {amount, bacon, meat, cheese, salad}}) {
  return (
    <div className="container border shadow-sm my-3">
      <div className="d-flex justify-content-between my-2">
        <h5 className="p-1">Ingredients: </h5>
        <div className="border p-1">Bacon: {bacon}</div>
        <div className="border p-1">Cheese: {cheese}</div>
        <div className="border p-1">Meat: {meat}</div>
        <div className="border p-1">Salad: {salad}</div>
      </div>
      <div>
        <b>Price</b>: USD {amount}
      </div>
    </div>
  );
}

export default Order;
