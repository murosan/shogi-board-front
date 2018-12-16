import Position from '../model/shogi/Position'
import { Empty } from '../model/shogi/Piece'
import { Sente } from '../model/shogi/Turn'

export default function(): Position {
  return {
    pos: [
      [Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty],
      [Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty],
      [Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty],
      [Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty],
      [Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty],
      [Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty],
      [Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty],
      [Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty],
      [Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty],
    ],
    cap0: [0, 0, 0, 0, 0, 0, 0],
    cap1: [0, 0, 0, 0, 0, 0, 0],
    turn: Sente,
    moveCount: 0,
  }
}
