import { Piece } from '../../../model/shogi/Piece'
import Point from '../../../model/shogi/Point'

export default function(pos: Piece[][], nexts: number[][], p: Piece): Point[] {
  const points: Point[] = []

  for (let i = 0; i < nexts.length; i++) {
    const row = nexts[i][0]
    const column = nexts[i][1]
    if (inRange(row) && inRange(column) && pos[row][column] * p <= 0)
      points.push({ row, column })
  }

  return points
}

function inRange(n: number): boolean {
  return 0 <= n && n <= 8
}
