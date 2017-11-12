'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DragSource } from 'react-dnd'
import { fetchThread, createThread } from '../store'


const Types = { THREAD_WEB: 'THREAD_WEB' }

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
  }

  render () {
    const { isDragging, connectDragSource } = this.props

    return connectDragSource(
      <div>
        I am a draggable card number {id}
        {isDragging && ' (and I am being dragged now)'}
      </div>
    )
  }

}

const MapPropsToProps = state => ({
  web: state.web,
  thread: state.thread
})

const MapDispatchToProps = dispatch => ({
  fetchThread: threadId => dispatch(fetchThread(threadId)),
  createThread: thread => dispatch(createThread(thread))
})


DragSource(Types.THREAD_WEB, threadSource, collect)(Thread)
export default connect(MapPropsToProps, MapDispatchToProps)(Thread)
