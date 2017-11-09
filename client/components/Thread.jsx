'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getThread, createThread, editThread, deleteThread } from '../store'

class Thread extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    <div>
      Thread
    </div>
  }

}

const MapPropsToProps = state => ({
  web: state.web,
  thread: state.thread
})

const MapDispatchToProps = dispatch => ({
  getThread: threadId => dispatch(getThread(threadId)),
  createThread: thread => dispatch(createThread(thread)),
  editThread: thread => dispatch(editThread(thread)),
  deleteThread: threadId => dispatch(deleteThread(threadId))
})


export default connect(MapPropsToProps, MapDispatchToProps)(Thread)
