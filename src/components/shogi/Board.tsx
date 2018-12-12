import React, { Component } from 'react'
import './Board.scss'
import Cell from './Cell'
import GameState from '../../model/shogi/GameState'
import { Piece } from '../../model/shogi/Piece'
import Position from '../../model/shogi/Position'

export interface Props {
  gs: GameState
}

export default class Board extends Component<Props, {}> {
  render() {
    const idx = this.props.gs.indexes
    const rows = idx.map(r =>
      idx.map(c => {
        const p: Piece | undefined = inRange(r, c)
          ? this.props.gs.pos.pos[r][c]
          : undefined
        return (
          <Cell
            key={`cell:${r}${c}`}
            row={r}
            column={c}
            isReversed={idx[0] === 9}
            piece={p}
          />
        )
      })
    )
    return (
      <div className="BoardContainer">
        <div className="Board">{rows}</div>
      </div>
    )
  }
}

function inRange(row: number, colum: number): boolean {
  return 0 <= row && row <= 8 && 0 <= colum && colum <= 8
}
