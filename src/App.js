import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import login from './componenets/Login'
import homePage from './componenets/HomePage'
import dashboard from './componenets/Dashboard';
import newNote from './componenets/NewNote'

class App extends React.Component {

  render(){
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            < Route exact path='/' component={homePage} />
            < Route exact path='/login' component={login} />
            < Route exact path='/dashboard' component={dashboard} />
            < Route exact path='/note/new' component={newNote} />
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
