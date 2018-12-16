import Position from '../../../model/shogi/Position'
import emptyPosition from '../../../testutils/emptyPosition'
import gin from './gin'
import { Gin0, Kin0, Kin1, Gin1 } from '../../../model/shogi/Piece'
import Point from '../../../model/shogi/Point'
import { Gote } from '../../../model/shogi/Turn'

describe('銀の動き判定', async () => {
  it('周りに駒がなければ5箇所に移動できる(先手)', async () => {
    const pos: Position = emptyPosition()
    pos.pos[4][4] = Gin0 // 55銀
    const expected: Point[] = [
      { row: 3, column: 3 },
      { row: 3, column: 4 },
      { row: 3, column: 5 },
      { row: 5, column: 3 },
      { row: 5, column: 5 },
    ]
    expect(gin(pos, { row: 4, column: 4, piece: Gin0 })).toEqual(expected)
  })

  it('周りに駒がなければ5箇所に移動できる(後手)', async () => {
    const pos: Position = emptyPosition()
    pos.turn = Gote
    pos.pos[4][4] = Gin1 // 55銀
    const expected: Point[] = [
      { row: 3, column: 3 },
      { row: 3, column: 5 },
      { row: 5, column: 3 },
      { row: 5, column: 4 },
      { row: 5, column: 5 },
    ]
    expect(gin(pos, { row: 4, column: 4, piece: Gin1 })).toEqual(expected)
  })

  it('味方の駒があるところには動けない(先手)', async () => {
    const pos: Position = emptyPosition()
    pos.pos[4][4] = Gin0 // 55銀
    pos.pos[3][3] = Kin0 // 44金
    const expected: Point[] = [
      { row: 3, column: 4 },
      { row: 3, column: 5 },
      { row: 5, column: 3 },
      { row: 5, column: 5 },
    ]
    expect(gin(pos, { row: 4, column: 4, piece: Gin0 })).toEqual(expected)
  })

  it('味方の駒があるところには動けない(後手)', async () => {
    const pos: Position = emptyPosition()
    pos.turn = Gote
    pos.pos[4][4] = Gin1 // 55銀
    pos.pos[3][3] = Kin1 // 44金
    const expected: Point[] = [
      { row: 3, column: 5 },
      { row: 5, column: 3 },
      { row: 5, column: 4 },
      { row: 5, column: 5 },
    ]
    expect(gin(pos, { row: 4, column: 4, piece: Gin1 })).toEqual(expected)
  })

  it('相手の駒があるところには動ける(先手)', async () => {
    const pos: Position = emptyPosition()
    pos.pos[4][4] = Gin0 // 55銀
    pos.pos[3][3] = Kin1 // 44金
    const expected: Point[] = [
      { row: 3, column: 3 },
      { row: 3, column: 4 },
      { row: 3, column: 5 },
      { row: 5, column: 3 },
      { row: 5, column: 5 },
    ]
    expect(gin(pos, { row: 4, column: 4, piece: Gin0 })).toEqual(expected)
  })

  it('相手の駒があるところには動ける(後手)', async () => {
    const pos: Position = emptyPosition()
    pos.turn = Gote
    pos.pos[4][4] = Gin1 // 55銀
    pos.pos[3][3] = Kin0 // 44金
    const expected: Point[] = [
      { row: 3, column: 3 },
      { row: 3, column: 5 },
      { row: 5, column: 3 },
      { row: 5, column: 4 },
      { row: 5, column: 5 },
    ]
    expect(gin(pos, { row: 4, column: 4, piece: Gin1 })).toEqual(expected)
  })
})
