/* @flow */

import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./src/store/store";
import Main from "./src/screens/Main";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
export default App;
