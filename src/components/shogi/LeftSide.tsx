import React, { Component } from 'react'
import './LeftSide.scss'
import Captures from './Captures'

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
