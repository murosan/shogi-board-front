import React, { Component } from 'react'
import './LeftSide.scss'
import Captures from './Captures'
import Selected from '../../model/shogi/Selected'
import { Turn } from '../../model/shogi/Turn'
import { ClickFunc } from '../../model/events/ClickFunc'

export interface Props {
  click: ClickFunc
  captures: number[]
  isTurn: boolean
  turn: Turn
  selected?: Selected
}

export default class LeftSide extends Component<Props, {}> {
  render() {
    return (
      <div className="LeftSide">
        <Captures
          click={this.props.click}
          isLeftSide={true}
          captures={this.props.captures}
          isTurn={this.props.isTurn}
          turn={this.props.turn}
          selected={this.props.selected}
        />
        <div />
      </div>
    )
  }
}
