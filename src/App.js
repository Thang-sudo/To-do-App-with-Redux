import React, {Component} from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import {Provider} from 'react-redux';
import store from './store';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  
  render(){
    return(
      <Provider store={store}>
        <div className="App">
          <div className = "todoForm">
            <h3>Todo App with Redux</h3>
            <AddTodo/>
            <Todos/>
          </div>
          
        </div>
      </Provider>
      
    )
  }
    

}

export default App;
