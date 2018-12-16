import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { newGameState } from '../model/shogi/GameStateInit'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App gs={newGameState()} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
