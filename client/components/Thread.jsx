'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DragSource } from 'react-dnd'
import { fetchThread, createThread, sendUpdate, THREAD_WEB } from '../store'


// specifies dragSource contract
const threadSource = {
  canDrag(props) {
    return props.isReady
  },

  isDragging(props, monitor) {
    // If your component gets unmounted while dragged
    // (like a card in Kanban board dragged between lists)
    // you can implement something like this to keep its
    // appearance dragged:
    return monitor.getItem().id === props.id
  },

  beginDrag(props, monitor, component) {
    // Return the data describing the dragged item

    // coords here???

    const item = { id: props.id }
    return item
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return
    }

    // When dropped on a compatible target, do something.
    // Read the original dragged item from getItem():
    const item = monitor.getItem()

    // You may also read the drop result from the drop target
    // that handled the drop, if it returned an object from
    // its drop() method.
    const dropResult = monitor.getDropResult()

    CardActions.moveCardToList(item.id, dropResult.listId)
  }
}

// specifies the props to send to component
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

    this.props.sendUpdate(event.target.value) // change
  }

  render () {
    const {
            isDragging,
            connectDragSource,
            content,
            x,
            y
    } = this.props

    return connectDragSource(
      <div onChange={ e => this.handleChange(e) } >
        { isDragging &&
          <path d={ `M${x.x1} ${y.y1} L${x.x2} ${y.y2} L${x.x3} ${y.y3} L${x.x4} ${y.y4}Z` }
                stroke-width={ this.props.stroke }
                stroke={ this.props.strokeWidth }
                fill={ this.props.fill } >
            { content }
          </path>
        }
      </div>


      // <div>
      //   I am a draggable card number {id}
      //   {isDragging && ' (and I am being dragged now)'}
      // </div>
    )
  }

}

const MapPropsToProps = state => ({
  web: state.web,
})

const MapDispatchToProps = dispatch => ({
  fetchThread: threadId => dispatch(fetchThread(threadId)),
  createThread: thread => dispatch(createThread(thread)),
  sendUpdate: thread => dispatch(sendUpdate(thread))
})


DragSource(Types.THREAD_WEB, threadSource, collect)(Thread)
export default connect(MapPropsToProps, MapDispatchToProps)(Thread)
