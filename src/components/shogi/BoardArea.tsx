import React, { Component } from 'react'
import Board from './Board'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import './BoardArea.scss'

export default class BoardArea extends Component {
  render() {
    return (
      <div className="BoardArea">
        <LeftSide />
        <Board />
        <RightSide />
      </div>
    )
  }
}
