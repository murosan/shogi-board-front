import React, { Component } from 'react'
import Captures from './Captures'
import './LeftSide.scss'

export default class LeftSide extends Component {
  render() {
    return (
      <div className="LeftSide">
        <Captures isLeftSide={true} />
        <div />
      </div>
    )
  }
}
