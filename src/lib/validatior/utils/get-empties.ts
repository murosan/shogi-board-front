import { Piece, Empty } from '../../../model/shogi/Piece'
import Point from '../../../model/shogi/Point'

export type ValidateFunc = (row: number, column: number) => boolean

export default function getEmpties(
  pos: Piece[][],
  validate?: ValidateFunc
): Point[] {
  return pos.reduce(
    (acc: Point[], cur: Piece[], r: number) =>
      cur
        .reduce((ac: Point[], p: Piece, c: number) => {
          const point: Point = { row: r, column: c, piece: Empty }
          if (validate) return validate(r, c) ? ac.concat(point) : ac
          return p === Empty ? ac.concat(point) : ac
        }, [])
        .concat(acc),
    []
  )
}
