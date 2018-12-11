import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { init } from '../model/shogi/GameStateInit'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App gs={init()} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
