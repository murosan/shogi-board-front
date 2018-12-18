import { Hisha0, Hisha1, Piece } from '../../../model/shogi/Piece'
import Point from '../../../model/shogi/Point'
import Position from '../../../model/shogi/Position'
import getEmpties from '../utils/getEmpties'
import getWithCallbacks from '../utils/getWithCallbacks'

export default function(pos: Position, p: Point): Point[] {
  if (!p.piece || (p.piece !== Hisha0 && p.piece !== Hisha1))
    throw new Error('Called validation for hisha, but piece id was not hisha.')

  if (p.row === -1 && p.column === -1) return capture()
  return onBoard()

  function capture(): Point[] {
    return getEmpties(pos.pos)
  }

  function onBoard(): Point[] {
    const callbacks = [
      [(r: number) => r - 1, (c: number) => c],
      [(r: number) => r + 1, (c: number) => c],
      [(r: number) => r, (c: number) => c - 1],
      [(r: number) => r, (c: number) => c + 1],
    ]

    return callbacks.reduce((acc: Point[], cb) => {
      const targets = getWithCallbacks(
        pos.pos,
        cb[0](p.row),
        cb[1](p.column),
        <Piece>p.piece,
        cb[0],
        cb[1]
      )
      return acc.concat(targets)
    }, [])
  }
}