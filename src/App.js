import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Navbar from './Navbar/Navbar';
import store from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Navbar />
          <Grid container />
        </Provider>
      </div>
    );
  }
}
export default App;
