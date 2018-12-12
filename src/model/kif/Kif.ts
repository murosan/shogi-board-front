import Move from './Move'
import Branch from './Branch'

export default interface Kif {
  history: (Move | Branch)[]

  index: number
}
