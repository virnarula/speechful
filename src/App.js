import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import StartPage from './components/StartPage/StartPage'
import HomeScreen from './components/HomeScreen/HomeScreen'
import DocumentScreen from './components/DocumentScreen/DocumentScreen'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={HomeScreen}></Route>
        <Route path="/document/:id" component={DocumentScreen}  ></Route>
        <Route path="/" component={StartPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
