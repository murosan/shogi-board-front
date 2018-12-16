import { Kaku0, Kaku1, Piece } from '../../../model/shogi/Piece'
import Point from '../../../model/shogi/Point'
import Position from '../../../model/shogi/Position'
import getEmpties from '../utils/getEmpties'
import getRecursive from '../utils/getWithCallbacks'

export default function(pos: Position, p: Point): Point[] {
  if (!p.piece || (p.piece !== Kaku0 && p.piece !== Kaku1))
    throw new Error('Called validation for kaku, but piece id was not kaku.')

  if (p.row === -1 && p.column === -1) return capture()
  return onBoard()

  function capture(): Point[] {
    return getEmpties(pos.pos)
  }

  function onBoard(): Point[] {
    const callbacks = [
      [(r: number) => r - 1, (c: number) => c - 1],
      [(r: number) => r - 1, (c: number) => c + 1],
      [(r: number) => r + 1, (c: number) => c - 1],
      [(r: number) => r + 1, (c: number) => c + 1],
    ]
    return callbacks.reduce(
      (acc: Point[], cb) =>
        acc.concat(
          getRecursive(
            pos.pos,
            cb[0](p.row),
            cb[1](p.column),
            <Piece>p.piece,
            cb[0],
            cb[1]
          )
        ),
      []
    )
  }
}
