import Point from '../../../model/shogi/Point'
import Position from '../../../model/shogi/Position'
import { Uma0, Uma1, Piece } from '../../../model/shogi/Piece'
import kaku from './kaku'
import getFromNexts from '../utils/getFromNexts'

export default function(pos: Position, p: Point): Point[] {
  if (!p.piece || (p.piece !== Uma0 || p.piece !== Uma1))
    throw new Error('Called validation for uma, but piece id was not uma.')

  if (p.row === -1 && p.column === -1)
    throw new Error('Uma must not be captured')

  const nexts = [
    [p.row - 1, p.column],
    [p.row, p.column - 1],
    [p.row, p.column + 1],
    [p.row + 1, p.column],
  ]

  return getFromNexts(pos.pos, nexts, <Piece>p.piece).concat(kaku(pos, p))
}
