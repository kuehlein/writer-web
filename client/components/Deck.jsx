'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Thread } from './'
import { fetchThread, createThread, sendUpdate } from '../store'


class Deck extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.handleChange(event.target.value)
  }

  render () {
    return (
      <div onChange={ e => this.handleChange(e) } >
        <Thread className='layer2'
                web={ this.props.web }
                thread={ this.props.thread }
                fetchThread={ this.props.fetchThread }
                createThread={ this.props.createThread }
                sendUpdate={ this.props.sendUpdate } />
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
  sendUpdate: thread => dispatch(sendUpdate(thread))
})


export default connect(MapPropsToProps, MapDispatchToProps)(Deck)
