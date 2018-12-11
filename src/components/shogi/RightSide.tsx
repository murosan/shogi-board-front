import React, { Component } from 'react'
import './RightSide.scss'
import Captures from './Captures'

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
