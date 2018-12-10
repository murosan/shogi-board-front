import Position from './Position'
import { Piece } from './Piece'

export default interface GameState {
  pos: Position

  // 盤面描画用インデックスの配列[-1 ~ 9]
  // 盤面反転を楽にするため用意している。
  // -1 と 9 はEdge部分。0-8が駒が置かれる9*9の盤面。
  indexes:
    | [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    | [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1]

  // 選択された駒の位置を入れる
  // [row, column] で指定
  // undefined なら選択なしの状態
  selected: [number, number] | undefined

  // 成・不成 を選択する画面の状態
  // [成の場合のPiece, 不成の場合のPiece]
  // undefined なら選択画面ではない
  confirm: [Piece, Piece] | undefined
}
