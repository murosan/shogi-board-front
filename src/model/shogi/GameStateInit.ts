import GameState from './GameState'
import { hirate } from './PositionInit'

/**
 * 初期局がセットされた GameState を返す
 */
export function init(): GameState {
  return {
    pos: hirate(),
    indexes: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    selected: undefined,
    confirm: undefined,
  }
}