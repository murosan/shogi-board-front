import React, { Component } from 'react'
import './Cell.scss'
import { Piece } from '../../model/shogi/Piece'
import { columnString, rowString } from '../../lib/strings'

export interface Props {
  row: number
  column: number
  isReversed: boolean
  piece: Piece | undefined
}

export default class Cell extends Component<Props, {}> {
  render(): JSX.Element {
    const className: string = getClassName(
      this.props.row,
      this.props.column,
      this.props.isReversed
    )
    return (
      <div className={className}>
        {this.EdgeTextRow()}
        {this.EdgeTextColumn()}
      </div>
    )
  }

  EdgeTextRow(): JSX.Element | undefined {
    const needText = inRange(this.props.column) && this.props.row === -1
    if (!needText) {
      return undefined
    }
    return <span>{columnString(this.props.column)}</span>
  }

  EdgeTextColumn(): JSX.Element | undefined {
    const needText = inRange(this.props.row) && this.props.column === -1
    if (!needText) {
      return undefined
    }
    return <span>{rowString(this.props.row)}</span>
  }
}

/**
 * クラス名を取得する
 * @param r number row
 * @param c number column
 * @param rv boolean isReversed
 */
function getClassName(r: number, c: number, rv: boolean): string {
  const rowInRange: boolean = inRange(r)
  const colInRange: boolean = inRange(c)
  const isLeft: boolean = rowInRange && ((!rv && c === 8) || (rv && c === 0))
  const isTop: boolean = colInRange && ((!rv && r === 0) || (rv && r === 8))
  const isStar: boolean =
    (!rv &&
      ((r === 2 && c === 6) ||
        (r === 2 && c === 3) ||
        (r === 5 && c === 6) ||
        (r === 5 && c === 3))) ||
    (rv &&
      ((r === 6 && c === 2) ||
        (r === 6 && c === 5) ||
        (r === 3 && c === 2) ||
        (r === 3 && c === 5)))

  const piece: string = rowInRange && colInRange ? 'Piece ' : ''
  const left: string = isLeft ? 'Piece-Left ' : ''
  const top: string = isTop ? 'Piece-Top ' : ''
  const edgeText: string =
    (c === -1 && rowInRange) || (r === -1 && colInRange) ? 'Cell-EdgeText ' : ''
  const star: string = isStar ? 'Piece-Star ' : ''
  return ('Cell ' + piece + left + top + edgeText + star).trim()
}

function inRange(n: number): boolean {
  return 0 <= n && n <= 8
}
