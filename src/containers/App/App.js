import React from 'react';
import { Provider } from "react-redux";

// Store
import store from '../../store/store';
import Router from '../../router/Router';


const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

App.propTypes = {
  // classes: PropTypes.object.isRequired,
};

export default App;
