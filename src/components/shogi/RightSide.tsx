import React, { Component } from 'react'
import './RightSide.scss'
import Captures from './Captures'
import Point from '../../model/shogi/Point'
import { Turn } from '../../model/shogi/Turn'
import { ClickFunc } from '../../model/events/ClickFunc'

export interface Props {
  click: ClickFunc
  captures: number[]
  isTurn: boolean
  turn: Turn
  selected?: Point
}

export default class RightSide extends Component<Props, {}> {
  render() {
    return (
      <div className="RightSide">
        <div />
        <Captures
          click={this.props.click}
          isLeftSide={false}
          captures={this.props.captures}
          isTurn={this.props.isTurn}
          turn={this.props.turn}
          selected={this.props.selected}
        />
      </div>
    )
  }
}
