import React, {Component} from 'react';
import './App.css';
import FirstComponent from './FirstComponent';
import MidComponent from './MidComponent';
import LastComponent from './LastComponent';



class App extends Component{
  render(){
    return(
      <div className = 'App'>
          <FirstComponent />
          <MidComponent />
          <LastComponent />

      </div>
    );
  }
}

export default App;
