import { Turn } from './Turn'

export default interface Position {
  // 駒の配置 9*9
  // 初期局面の例は ./PositionInit.ts
  pos: number[][]

  // 先手の持ち駒[歩の枚数, 香の枚数, 桂, 銀, 金, 角, 飛]
  cap0: number[]

  // 後手の持ち駒[歩の枚数, 香の枚数, 桂, 銀, 金, 角, 飛]
  cap1: number[]

  //  1: 先手番
  // -1: 後手番
  turn: 1 | -1

  // 手数
  moveCount: number
}
