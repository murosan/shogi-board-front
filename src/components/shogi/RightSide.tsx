import React, { Component } from 'react'
import Captures from './Captures'
import './RightSide.scss'

export default class RightSide extends Component {
  render() {
    return (
      <div className="RightSide">
        <div />
        <Captures isLeftSide={false} />
      </div>
    )
  }
}
