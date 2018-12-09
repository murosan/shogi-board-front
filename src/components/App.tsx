import React, { Component } from 'react'
import Board from './shogi/Board'
import './App.scss'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
      </div>
    )
  }
}
