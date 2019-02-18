import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';

import { connect } from 'react-redux'

import Form from './components/Form'
import Atestado from './components/Atestado'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="navigation-bar">
            <p className="logo">Barra de navegação</p>
            <ul>
              <li><Link to="/form">Formulário</Link></li>
              <li><Link to="/atestado">Atestado</Link></li>
            </ul>
          </div>
          <div className="container">
            <div className="header">
              <h1>Cabeçalho</h1><br/>
              <p>
                {
                  this.props.lista[0] && <span>{this.props.lista[0].nome} - {this.props.lista[0].email}</span>
                }
              </p>
            </div>
            <div className="content">
              <Route path="/form" component={Form} />
              <Route path="/atestado" component={Atestado} />
            </div>
            <div className="footer">
              <span>Make by Giovanni Pizelli</span>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return ({
    lista: state.atestados
  })
}

export default connect(mapStateToProps)(App);
