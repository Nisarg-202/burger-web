import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {
  addAmount,
  addBacon,
  addCheese,
  addMeat,
  addSalad,
  subAmount,
  subBacon,
  subCheese,
  subMeat,
  subSalad,
  addOrder,
} from '../actions';
import Navbar from '../Components/Navbar';
import Items from '../Components/Items';

function HomePage({
  auth,
  addAmount,
  addBacon,
  addCheese,
  addMeat,
  addSalad,
  subAmount,
  subBacon,
  subCheese,
  subMeat,
  subSalad,
  amount,
  cheese,
  bacon,
  meat,
  salad,
  addOrder,
}) {
  async function onHandleChange() {
    await addOrder({cheese, meat, salad, bacon, amount});
  }
  return (
    <div>
      <Navbar />
      <div className="text-center mt-5">
        <i class="fas fa-hamburger text-success fa-7x"></i>
      </div>
      <div className="bg-success mt-5">
        <div className="container">
          <div className="text-center">
            <p>
              Current Price : <b>{amount}</b>
            </p>
          </div>
          <Items
            name="Salad"
            Increase={addAmount}
            Decrease={subAmount}
            price={2}
            onAddCount={addSalad}
            onSubCount={subSalad}
            count={salad}
          />
          <Items
            name="Bacon"
            Increase={addAmount}
            Decrease={subAmount}
            price={3}
            onAddCount={addBacon}
            onSubCount={subBacon}
            count={bacon}
          />
          <Items
            name="Cheese"
            Increase={addAmount}
            Decrease={subAmount}
            price={4}
            onAddCount={addCheese}
            onSubCount={subCheese}
            count={cheese}
          />
          <Items
            name="Meat"
            Increase={addAmount}
            Decrease={subAmount}
            price={3}
            onAddCount={addMeat}
            onSubCount={subMeat}
            count={meat}
          />
        </div>
        <div className="text-center">
          {auth ? (
            <button
              className="btn btn-secondary my-3"
              onClick={onHandleChange}
              disabled={amount < 5}
            >
              ORDER NOW
            </button>
          ) : (
            <Link className="btn btn-secondary my-3" to="/authenticate">
              SIGN UP
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    amount: state.amount,
    cheese: state.cheese,
    bacon: state.bacon,
    meat: state.meat,
    salad: state.salad,
  };
}

export default connect(mapStateToProps, {
  addAmount,
  addBacon,
  addCheese,
  addMeat,
  addSalad,
  subAmount,
  subBacon,
  subCheese,
  subMeat,
  subSalad,
  addOrder,
})(HomePage);
