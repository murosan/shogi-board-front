import { Piece } from './Piece'

export default interface Confirm {
  // 成の場合の駒ID
  promoted: Piece

  // 不成の場合の駒ID
  preserved: Piece
}
