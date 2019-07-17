import React, {Component} from 'react';
import Navbar from './Navbar/Navbar';
import { Provider } from 'react-redux';
import store from './store';
import Grid from '@material-ui/core/Grid';
import './App.css';
class App extends Component {
  render(){
    return (
      <div className="App">
        <Provider store={store}>
          <Navbar/>
            <Grid container>
              
            </Grid>
         </Provider>
      </div>
    );
  }
}
export default App;
