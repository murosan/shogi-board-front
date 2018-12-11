import { Piece } from './Piece'
import { Turn } from './Turn'

export default interface Position {
  // 駒の配置 9*9
  pos: number[][]

  // 先手の持ち駒[歩の枚数, 香の枚数, 桂, 銀, 金, 角, 飛]
  cap0: number[]

  // 後手の持ち駒[歩の枚数, 香の枚数, 桂, 銀, 金, 角, 飛]
  cap1: number[]

  // 0 先手番、1 後手番
  turn: Turn

  // 手数
  moveCount: number
}
