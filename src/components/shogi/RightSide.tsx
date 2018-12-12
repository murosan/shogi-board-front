import React, { Component } from 'react'
import './RightSide.scss'
import Captures from './Captures'

export interface Props {
  captures: number[]
  isTurn: boolean
  selected?: number[]
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
