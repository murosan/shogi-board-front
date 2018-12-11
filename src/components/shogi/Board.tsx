import React, { Component } from 'react'
import './Board.scss'
import Cell from './Cell'
import GameState from '../../model/shogi/GameState'

export interface Props {
  gs: GameState
}

export default class Board extends Component<Props, {}> {
  render() {
    const indexArr = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const rows = indexArr.map(r =>
      indexArr.map(c => <Cell key={`cell:${r}${c}`} row={r} colum={c} />)
    )
    return (
      <div className="BoardContainer">
        <div className="Board">{rows}</div>
      </div>
    )
  }
}
