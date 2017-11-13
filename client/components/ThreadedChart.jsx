'use strict'

import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'
import { DropTarget } from 'react-dnd'
import { Chart, Web } from './'


const Types = { THREAD_WEB: 'THREAD_WEB' }


const chartTarget = {
  drop(props, monitor) {
    // moveThread(props.x, props.y)
  }
}

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    itemType: monitor.getItemType()
  }
}


class ThreadedChart extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { connectDropTarget } = this.props

    return connectDropTarget(
      <div>
        <Web />
        <Chart />
      </div>
    )
  }

}


export default DropTarget(Types.THREAD_WEB, chartTarget, collect)(ThreadedChart)
