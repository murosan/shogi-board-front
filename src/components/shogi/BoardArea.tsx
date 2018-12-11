import React, { Component } from 'react'
import Board from './Board'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import GameState from '../../model/shogi/GameState'
import './BoardArea.scss'

export interface Props {
  gs: GameState
}

export default class BoardArea extends Component<Props, {}> {
  render() {
    return (
      <div className="BoardArea">
        <LeftSide />
        <Board gs={this.props.gs} />
        <RightSide />
      </div>
    )
  }
}
