import ValidationInfo from '../../model/shogi/ValidationInfo'
import { init } from './validation-info'

it('ValidationInfo を初期化できる', async () => {
  const vi: ValidationInfo = init()

  expect(vi.turn.length).toEqual(9)
  expect(vi.turn.every(a => a.length === 9)).toBeTruthy()

  expect(vi.next.length).toEqual(9)
  expect(vi.next.every(a => a.length === 9)).toBeTruthy()
})
