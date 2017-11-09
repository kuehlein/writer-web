'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchThread, createThread, editThread, deleteThread } from '../store'

class Thread extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        Thread
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
  createThread: thread => dispatch(createThread(thread)),
  editThread: thread => dispatch(editThread(thread)),
  deleteThread: threadId => dispatch(deleteThread(threadId))
})


export default connect(MapPropsToProps, MapDispatchToProps)(Thread)
