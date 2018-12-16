import { Piece, Empty } from '../../../model/shogi/Piece'
import Point from '../../../model/shogi/Point'

export default function getRecursive(
  pos: Piece[][],
  row: number,
  column: number,
  piece: Piece,
  callbackRow: (r: number) => number,
  callbackColumn: (r: number) => number
): Point[] {
  return rec(row, column, [])

  function rec(r: number, c: number, acc: Point[]): Point[] {
    if (outOfBoard(row) || outOfBoard(column)) return acc
    const target: Piece = pos[r][c]
    const point: Point = { row: r, column: c, piece: target }
    if (target * piece < 0) return acc.concat(point)
    if (target * piece > 0) return acc
    return rec(callbackRow(r), callbackColumn(c), acc.concat(point))
  }
}

function outOfBoard(n: number): boolean {
  return n < 0 || n > 8
}
