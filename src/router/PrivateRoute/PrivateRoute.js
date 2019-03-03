import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const PrivateRoute = ({ component: Component, user, ...others }) => (
  <Route
    {...others}
    render={(props) => user ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: {
              message: 'Por favor, haz login primero'
            }
          }}
        />
      )}
  />
);

const mapStateToProps = (state/*, otherProps */) => ({
  user: state.user.user,
})

const mapDispatchToProps = (dispatch) => ({
  //
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute);

