import React, { Component } from 'react'
import './App.scss'
import BoardArea from './shogi/BoardArea'
import GameState from '../model/shogi/GameState'
import { Piece } from '../model/shogi/Piece'
import { Turn } from '../model/shogi/Turn'
import Confirm from '../model/shogi/Confirm'
import { number } from 'prop-types'
import { ClickProps } from '../model/events/ClickFunc'

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
        <BoardArea
          gs={this.state.gs}
          click={(p: ClickProps) => this.click(p)}
        />
      </div>
    )
  }

  click(p: ClickProps) {
    const sel: number[] | undefined = this.state.gs.selected
    const turn: Turn = this.state.gs.pos.turn

    // (選択された駒がない && 手番側の駒)なら選択する
    if (!sel && isPiece(p.clicked) && ownerIsTurn(p.clicked, turn)) {
      this.state.gs.selected = [p.row, p.column, p.clicked, p.i || 0]
      this.setState({ gs: this.state.gs })
    }
  }
}

function isPiece(pc: Piece | Confirm): pc is Piece {
  return typeof pc === 'number'
}

function ownerIsTurn(p: Piece, t: Turn): boolean {
  return (p < 0 && t === -1) || (p > 0 && t === 1)
}
