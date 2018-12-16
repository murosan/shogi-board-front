import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
import GameState from './model/shogi/GameState'
import { newGameState } from './model/shogi/GameStateInit'
import setMovements from './lib/validatior/setMovements'

const gs: GameState = newGameState()
setMovements(gs.vi, gs.pos)

ReactDOM.render(<App gs={gs} />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
