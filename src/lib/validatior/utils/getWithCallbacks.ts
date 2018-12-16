import { Piece } from '../../../model/shogi/Piece'
import Point from '../../../model/shogi/Point'

export default function(
  pos: Piece[][],
  row: number,
  column: number,
  piece: Piece,
  callbackRow: (r: number) => number,
  callbackColumn: (c: number) => number
): Point[] {
  const points: Point[] = []

  while (inRange(row) && inRange(column)) {
    const target: Piece = pos[row][column]
    const point: Point = { row, column }
    if (target * piece > 0) break
    points.push(point)
    if (target * piece < 0) break

    row = callbackRow(row)
    column = callbackColumn(column)
  }

  return points
}

function inRange(n: number): boolean {
  return 0 <= n && n <= 8
}
