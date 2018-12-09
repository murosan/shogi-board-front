import React, { Component } from 'react'
import './Cell.scss'

export interface Props {
  row: number
  colum: number
}

export default class Cell extends Component<Props, {}> {
  render() {
    return <div className={getClassName(this.props.row, this.props.colum)} />
  }
}

function getClassName(row: number, column: number): string {
  const inRange = (n: number) => n >= 0 && n <= 8
  const piece = inRange(row) && inRange(column) ? 'Piece ' : ''
  const left = column === 0 && inRange(row) ? 'Piece-left ' : ''
  const top = row === 0 && inRange(column) ? 'Piece-top ' : ''
  const star =
    (row === 2 && column === 2) ||
    (row === 2 && column === 5) ||
    (row === 5 && column === 2) ||
    (row === 5 && column === 5)
      ? 'Piece-star '
      : ''
  return ('Cell ' + piece + left + top + star).trim()
}
