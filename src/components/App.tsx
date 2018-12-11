import React, { Component } from 'react'
import './App.scss'
import BoardArea from './shogi/BoardArea'
import GameState from '../model/shogi/GameState'

export interface Props {
  gs: GameState
}

export interface State {
  gs: GameState
}

export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      gs: props.gs,
    }
  }

  render() {
    return (
      <div className="App App-BoardOnly">
        <BoardArea gs={this.state.gs} />
      </div>
    )
  }
}
