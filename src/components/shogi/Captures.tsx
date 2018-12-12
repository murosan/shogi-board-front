import React, { Component } from 'react'
import './Captures.scss'
import {
  Fu0,
  Kyou0,
  Kei0,
  Gin0,
  Kin0,
  Kaku0,
  Hisha0,
  Piece,
} from '../../model/shogi/Piece'

export interface Props {
  isLeftSide: boolean
  captures: number[]
}

export default class Captures extends Component<Props, {}> {
  render(): JSX.Element {
    return (
      <div className={'Captures Captures' + Number(this.props.isLeftSide)}>
        {this.cells('Hisha', Hisha0, this.props.captures[6])}
        {this.cells('Kaku', Kaku0, this.props.captures[5])}
        {this.cells('Kin', Kin0, this.props.captures[4])}
        {this.cells('Gin', Gin0, this.props.captures[3])}
        {this.cells('Kei', Kei0, this.props.captures[2])}
        {this.cells('Kyou', Kyou0, this.props.captures[1])}
        {this.cells('Fu', Fu0, this.props.captures[0])}
      </div>
    )
  }

  cells(name: string, pieceId: Piece, count: number): JSX.Element {
    const children = Array.from(Array(count).keys()).map(i => (
      <div
        key={`Cap-${this.props.isLeftSide}-${name}-${i}`}
        className={`Piece Piece-${pieceId} Capture-${pieceId}${count}${i + 1}`}
      />
    ))
    return <div className={`Captures-Inner Captures-${name}`}>{children}</div>
  }
}
