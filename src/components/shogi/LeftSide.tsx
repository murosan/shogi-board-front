import React, { Component } from 'react'
import './LeftSide.scss'
import Captures from './Captures'

export interface Props {
  captures: number[]
}

export default class LeftSide extends Component<Props, {}> {
  render() {
    return (
      <div className="LeftSide">
        <Captures isLeftSide={true} captures={this.props.captures} />
        <div />
      </div>
    )
  }
}
