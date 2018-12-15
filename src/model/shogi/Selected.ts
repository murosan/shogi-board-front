import { Piece } from './Piece'

export default interface Selected {
  row: number
  column: number
  piece: Piece

  // 持ち駒の場合は何番目か
  // 盤上の場合は undefined
  i?: number
}
