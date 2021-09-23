import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import logo from './logo.svg';
import { Container } from 'semantic-ui-react'
import './App.css';
import HeadMenu from './components/HeadMenu';

import Home from './pages/Home';
import Categories from './pages/Categories';
import Meals from './pages/Meals';
import MealDetail from './pages/MealDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Container >

          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <HeadMenu/>
          </header>

          <main>
            <Switch>
              <Route path='/' component={Home} exact/>
              <Route path='/categories' component={Categories} exact/>
              <Route path='/category/:keyword' component={Meals}/>
              <Route path='/meal/:id/detail'   component={MealDetail}/>
            </Switch>
          </main>

        </Container>
      </Router>
      
    </div>
  );
}

export default App;
