import React, { Component } from 'react'
import './RightSide.scss'
import Captures from './Captures'

export interface Props {
  captures: number[]
}

export default class RightSide extends Component<Props, {}> {
  render() {
    return (
      <div className="RightSide">
        <div />
        <Captures isLeftSide={false} captures={this.props.captures} />
      </div>
    )
  }
}
