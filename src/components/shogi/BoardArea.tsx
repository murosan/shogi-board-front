import React, { Component } from 'react'
import './BoardArea.scss'
import Board from './Board'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import GameState from '../../model/shogi/GameState'

export interface Props {
  gs: GameState
}

export default class BoardArea extends Component<Props, {}> {
  render() {
    const gs: GameState = this.props.gs
    const isReversed: boolean = gs.indexes[0] === 9
    const cap0: number[] = gs.pos.cap0
    const cap1: number[] = gs.pos.cap1

    return (
      <div className="BoardArea">
        <LeftSide captures={isReversed ? cap1 : cap0} />
        <Board gs={this.props.gs} />
        <RightSide captures={isReversed ? cap0 : cap1} />
      </div>
    )
  }
}
