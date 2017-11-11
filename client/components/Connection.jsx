'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchThread, fetchConnection } from '../store'

class Connection extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        Connection
      </div>
    )
  }

}

const MapPropsToProps = state => ({
  thread: state.thread,
  connection: state.connection
})

const MapDispatchToProps = dispatch => ({
  fetchThread: threadId => dispatch(fetchThread(threadId)),
  fetchConnection: connectionId => dispatch(fetchConnection(connectionId))
})


export default connect(MapPropsToProps, MapDispatchToProps)(Connection)
