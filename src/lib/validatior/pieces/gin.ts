import { Gin0, Gin1, Piece } from '../../../model/shogi/Piece'
import Point from '../../../model/shogi/Point'
import Position from '../../../model/shogi/Position'
import getEmpties from '../utils/getEmpties'
import getFromNexts from '../utils/getFromNexts'

export default function(pos: Position, p: Point): Point[] {
  if (!p.piece || (p.piece !== Gin0 && p.piece !== Gin1))
    throw new Error('Called validation for gin, but piece id was not gin.')

  if (p.row === -1 && p.column === -1) return capture()
  return onBoard()

  function capture(): Point[] {
    return getEmpties(pos.pos)
  }

  function onBoard(): Point[] {
    const nexts: number[][] =
      <Piece>p.piece > 0
        ? [
            [p.row - 1, p.column - 1],
            [p.row - 1, p.column],
            [p.row - 1, p.column + 1],
            [p.row + 1, p.column - 1],
            [p.row + 1, p.column + 1],
          ]
        : [
            [p.row - 1, p.column - 1],
            [p.row - 1, p.column + 1],
            [p.row + 1, p.column - 1],
            [p.row + 1, p.column],
            [p.row + 1, p.column + 1],
          ]

    return getFromNexts(pos.pos, nexts, <Piece>p.piece)
  }
}