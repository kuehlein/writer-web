'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DragSource } from 'react-dnd'
import PropTypes from 'prop-types'
import { fetchThread, createThread, sendUpdate } from '../store'


const Types = { THREAD_WEB: 'THREAD_WEB' }


const threadSource = {
  beginDrag(props) {
    return { threadId: props.id }  // possibly unneccessary
  }
}

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}


class Thread extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {

    // deconstruct d property on <path>
    // reformat into thread object
        // NaN errors possibly from this

    this.props.sendUpdate(event.target.value)
  }

  render () {
    console.log('@#$%^&*&^%$#@', this.props)
    const { isDragging, connectDragSource } = this.props
    const { content, x, y } = this.props.thread

    return connectDragSource(
      <div onChange={ e => this.handleChange(e) } >
        <path d={ `M${x.x1} ${y.y1} L${x.x2} ${y.y2} L${x.x3} ${y.y3} L${x.x4} ${y.y4}Z` }
              stroke-width='10'
              stroke='white'
              fill='white'
              style={{ opacity: isDragging ? 0.5 : 1 }} >
          HELLO THERE HOW ARE YOU???
        </path>
      </div>
    )
  }

}

Thread.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
}


export default DragSource(Types.THREAD_WEB, threadSource, collect)(Thread)

