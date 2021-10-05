import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {userLogin} from '../actions';

function Authenticate({userLogin}) {
  const [spinner, setSpinner] = useState(false);
  const [condition, setCondition] = useState(true);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function onConditionChange() {
    if (condition) {
      setCondition(false);
    } else {
      setCondition(true);
    }
  }

  async function onHandleChange(e) {
    e.preventDefault();
    setSpinner(true);
    await userLogin({type: condition, email, password});
    setTimeout(function () {
      setSpinner(false);
    }, 1500);
  }

  function onEmailChange(e) {
    setEmail(e.target.value);
  }

  function onPasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center">
        <div className="card shadow-sm text-center" style={{width: '18rem'}}>
          <div className="card-body">
            <form onSubmit={onHandleChange}>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Email"
                  type="email"
                  required
                  value={email}
                  onChange={onEmailChange}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Password"
                  type="password"
                  required
                  value={password}
                  onChange={onPasswordChange}
                />
              </div>
              <div className="form-group">
                {spinner ? (
                  <Link className="btn btn-success">
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </Link>
                ) : (
                  <button type="submit" className="btn btn-success">
                    SUBMIT
                  </button>
                )}
              </div>
              <div className="form-group">
                <Link className="btn btn-secondary" onClick={onConditionChange}>
                  {condition ? 'SWITCH TO SIGNIN' : 'SWITCH TO SIGNUP'}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(null, {userLogin})(Authenticate);
