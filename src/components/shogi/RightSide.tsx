import React, { Component } from 'react'
import './RightSide.scss'
import Captures from './Captures'
import Selected from '../../model/shogi/Selected'
import { ClickFunc } from '../../model/events/ClickFunc'

export interface Props {
  click: ClickFunc
  captures: number[]
  isTurn: boolean
  selected?: Selected
}

export default class RightSide extends Component<Props, {}> {
  render() {
    return (
      <div className="RightSide">
        <div />
        <Captures
          isLeftSide={false}
          captures={this.props.captures}
          isTurn={this.props.isTurn}
          selected={this.props.selected}
        />
      </div>
    )
  }
}
