'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWeb } from '../store'
import MapThreads from './MapThreads'

class Web extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <MapThreads />
      </div>
    )
  }

}

const MapPropsToProps = state => ({
  web: state.web
})

const MapDispatchToProps = dispatch => ({
  fetchWeb: web => dispatch(fetchWeb(web))
})


export default connect(MapPropsToProps, MapDispatchToProps)(Web)
