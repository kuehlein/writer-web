'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWeb, fetchConnections } from '../store'

class AllConnections extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        AllConnections
      </div>
    )
  }

}

const MapPropsToProps = state => ({
  web: state.web,
  thread: state.thread,
  AllConnections: state.allConnections
})

const MapDispatchToProps = dispatch => ({
  fetchWeb: webId => dispatch(fetchWeb(webId)),
  fetchConnections: webId => dispatch(fetchConnections(webId))
})


export default connect(MapPropsToProps, MapDispatchToProps)(AllConnections)
