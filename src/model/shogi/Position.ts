import { Piece } from './Piece'
import { Turn } from './Turn'

export type Row = [
  Piece,
  Piece,
  Piece,
  Piece,
  Piece,
  Piece,
  Piece,
  Piece,
  Piece
]
export type Captures = [number, number, number, number, number, number, number]

export default interface Position {
  // 駒の配置 9*9
  pos: [Row, Row, Row, Row, Row, Row, Row, Row, Row]

  // 先手の持ち駒[歩の枚数, 香の枚数, 桂, 銀, 金, 角, 飛]
  cap0: Captures

  // 後手の持ち駒[歩の枚数, 香の枚数, 桂, 銀, 金, 角, 飛]
  cap1: Captures

  // 0 先手番、1 後手番
  turn: Turn

  // 手数
  moveCount: number
}
