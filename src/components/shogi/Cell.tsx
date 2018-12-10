import React, { Component } from 'react'
import './Cell.scss'
import { columnString, rowString } from '../../lib/strings'

export interface Props {
  row: number
  colum: number
}

export default class Cell extends Component<Props, {}> {
  render() {
    const rowText = isEdgeTextRow(this.props.row, this.props.colum) ? (
      <span>{columnString(this.props.colum)}</span>
    ) : (
      undefined
    )
    const columnText = isEdgeTextColumn(this.props.row, this.props.colum) ? (
      <span>{rowString(this.props.row)}</span>
    ) : (
      undefined
    )
    const className = getClassName(this.props.row, this.props.colum)
    return (
      <div className={className}>
        {rowText}
        {columnText}
      </div>
    )
  }
}

function getClassName(row: number, column: number): string {
  const piece = inRange(row) && inRange(column) ? 'Piece ' : ''
  const left = column === 0 && inRange(row) ? 'Piece-Left ' : ''
  const top = row === 0 && inRange(column) ? 'Piece-Top ' : ''
  const edgeText =
    isEdgeTextRow(row, column) || isEdgeTextColumn(row, column)
      ? 'Cell-EdgeText '
      : ''
  const star =
    (row === 2 && column === 2) ||
    (row === 2 && column === 5) ||
    (row === 5 && column === 2) ||
    (row === 5 && column === 5)
      ? 'Piece-Star '
      : ''
  return ('Cell ' + piece + left + top + edgeText + star).trim()
}

function isEdgeTextRow(row: number, column: number): boolean {
  return row === -1 && inRange(column)
}

function isEdgeTextColumn(row: number, column: number): boolean {
  return column === 9 && inRange(row)
}

function inRange(n: number): boolean {
  return n >= 0 && n <= 8
}
