import React, { Component } from 'react'
import BoardArea from './shogi/BoardArea'
import './App.scss'

export default class App extends Component {
  render() {
    return (
      <div className="App App-BoardOnly">
        <BoardArea />
      </div>
    )
  }
}
