import React, { Component } from 'react';
import logo from './logo.svg';
//import LoginForm                  from './components/LoginForm';
import './App.css';

function Welcome(props) {
  return <h1>Hello, {props.prenom} {props.nom}</h1>;
}

function Test (props) {
  return <h2> Test {props.toto}</h2>;
}

class App extends Component {
  render() {
    return (
      <div>
      <Welcome prenom="Satra" nom="Connor" />
      <Test toto="toto" />
      <Welcome prenom="Cahal" nom="Connor" />
      <Welcome prenom="Edith" nom="Connor" />
     </div>
    );
  }
}

export default App;
