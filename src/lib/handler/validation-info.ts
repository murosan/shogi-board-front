import ValidationInfo from '../../model/shogi/ValidationInfo'
import Point from '../../model/shogi/Point'

export function init(): ValidationInfo {
  return {
    turn: gen(),
    next: gen(),
  }
}

function gen(): Point[][][] {
  return [
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
  ]
}
