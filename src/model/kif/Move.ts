import Position from '../shogi/Position'
import { Piece } from '../shogi/Piece'

export default interface Move {
  // 棋譜の文字列
  str: string

  // 移動元 [row, column]
  // 持ち駒なら [-1, -1]
  from: number[]

  // 移動先 [row, column]
  to: number[]

  // 駒ID
  piece: Piece

  // 成 or 不成
  promote: boolean

  // 配置
  pos: Position
}
