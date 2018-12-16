import { Piece, Empty } from '../../../model/shogi/Piece'
import Point from '../../../model/shogi/Point'

export default function getFromNexts(
  pos: Piece[][],
  nexts: number[][],
  p: Piece
): Point[] {
  return nexts.reduce((acc: Point[], rc: number[]) => {
    if (outOfBoard(rc[0]) || outOfBoard(rc[1])) return acc

    const target: Piece = pos[rc[0]][rc[1]]
    if (target === Empty || target * p < 0)
      return acc.concat({ row: rc[0], column: rc[1], piece: target })
    return acc
  }, [])
}

function outOfBoard(n: number): boolean {
  return n < 0 || n > 8
}
