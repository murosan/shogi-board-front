import Point from '../../../model/shogi/Point'
import Position from '../../../model/shogi/Position'
import { Fu0, Fu1, Piece, Empty } from '../../../model/shogi/Piece'
import getEmpties from '../utils/get-empties'

export default function(pos: Position, p: Point): Point[] {
  if (!p.piece || (p.piece !== Fu0 && p.piece !== Fu1))
    throw new Error('Called validation for fu, but piece id was not fu.')

  // 二歩チェックのため、すでに歩がある列を入れておく
  const columnsOfContainingFu: number[] = []
  for (let col = 0; col < 9; col++) {
    for (let row = 0; row < 9; row++) {
      if (pos.pos[row][col] === p.piece) {
        columnsOfContainingFu.push(col)
        break
      }
    }
  }

  // 二歩チェック。二歩なら true, 二歩ではないとき false
  const duplicates = (column: number) => columnsOfContainingFu.includes(column)

  if (p.row === -1 && p.column === -1) return capture()
  return onBoard()

  function capture(): Point[] {
    const invalidRow: number = <Piece>p.piece > 0 ? 0 : 8
    return getEmpties(
      pos.pos,
      (r: number, c: number) => r !== invalidRow && !duplicates(c)
    )
  }

  function onBoard(): Point[] {
    // for safety
    if (duplicates(p.column)) return []

    const nextRow: number = <Piece>p.piece > 0 ? p.row - 1 : p.row + 1
    if (nextRow < 0 || nextRow > 8) return []

    const target: Piece = pos.pos[nextRow][p.column]

    // 空マスか、相手の駒ならOK
    if (target === Empty || target * <Piece>p.piece < 0)
      return [{ row: nextRow, column: p.column, piece: target }]

    return []
  }
}
