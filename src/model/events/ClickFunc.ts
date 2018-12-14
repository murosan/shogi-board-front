import { Piece } from '../shogi/Piece'
import Confirm from '../shogi/Confirm'

export type ClickProps = {
  clicked: Piece | Confirm
  row: number
  column: number
  i?: number
}

export type ClickFunc = (p: ClickProps) => void
