import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import {fetchOrders} from '../actions';
import Navbar from '../Components/Navbar';
import Order from '../Components/Order';

function OrdersPage({fetchOrders, orders}) {
  useEffect(async function () {
    await fetchOrders();
  }, []);
  return (
    <div>
      <Navbar />
      {orders.length > 0 &&
        orders.map(function (item) {
          return <Order item={item} />;
        })}
    </div>
  );
}

function mapStateToProps(state) {
  return {orders: state.orders};
}

export default connect(mapStateToProps, {fetchOrders})(OrdersPage);
