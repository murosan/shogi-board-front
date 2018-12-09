import React, { Component } from 'react'
import './Captures.scss'

export interface Props {
  isLeftSide: boolean
}

export default class Captures extends Component<Props, {}> {
  render() {
    const className = 'Captures Captures' + Number(this.props.isLeftSide)
    return <div className={className} />
  }
}
