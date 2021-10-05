import firebase from 'firebase/app';

export const userLogin = function (info) {
  return async function (dispatch) {
    if (info.type) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(info.email, info.password)
        .then(function (user) {
          dispatch({type: 'user_login', payload: user.user.uid});
        })
        .catch(function (err) {
          alert(err.message);
        });
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(info.email, info.password)
        .then(function (user) {
          dispatch({type: 'user_login', payload: user.user.uid});
        })
        .catch(function (err) {
          alert(err.message);
        });
    }
  };
};

export const userLogout = function () {
  return function (dispatch) {
    firebase
      .auth()
      .signOut()
      .then(function () {
        dispatch({type: 'user_login', payload: false});
      })
      .catch(function (err) {
        alert(err.message);
      });
  };
};

export const checkUser = function () {
  return function (dispatch) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        dispatch({type: 'user_login', payload: user.uid});
      } else {
        dispatch({type: 'user_login', payload: false});
      }
    });
  };
};

export const addAmount = function (price) {
  return function (dispatch) {
    dispatch({type: 'add_amount', payload: price});
  };
};

export const subAmount = function (price) {
  return function (dispatch) {
    dispatch({type: 'sub_amount', payload: price});
  };
};

export const addBacon = function () {
  return function (dispatch) {
    dispatch({type: 'add_bacon_count'});
  };
};

export const subBacon = function () {
  return function (dispatch) {
    dispatch({type: 'sub_bacon_count'});
  };
};

export const addCheese = function () {
  return function (dispatch) {
    dispatch({type: 'add_cheese_count'});
  };
};

export const subCheese = function () {
  return function (dispatch) {
    dispatch({type: 'sub_cheese_count'});
  };
};

export const addMeat = function () {
  return function (dispatch) {
    dispatch({type: 'add_meat_count'});
  };
};

export const subMeat = function () {
  return function (dispatch) {
    dispatch({type: 'sub_meat_count'});
  };
};

export const addSalad = function () {
  return function (dispatch) {
    dispatch({type: 'add_salad_count'});
  };
};

export const subSalad = function () {
  return function (dispatch) {
    dispatch({type: 'sub_salad_count'});
  };
};

export const addOrder = function (order) {
  return function (dispatch, getState) {
    const db = firebase.firestore();
    const docRef = db.collection('burgers').doc(getState().auth);
    docRef.get().then(function (doc) {
      if (doc.exists) {
        docRef.update({
          orders: firebase.firestore.FieldValue.arrayUnion(order),
        });
      } else {
        docRef.set({
          orders: firebase.firestore.FieldValue.arrayUnion(order),
        });
      }
    });
    alert('Order Successfully Added!!');
  };
};

export const fetchOrders = function () {
  return function (dispatch, getState) {
    const db = firebase.firestore();
    const docRef = db.collection('burgers').doc(getState().auth);
    docRef.get().then(function (doc) {
      if (doc.exists) {
        dispatch({type: 'orders', payload: doc.data().orders});
      }
    });
  };
};
