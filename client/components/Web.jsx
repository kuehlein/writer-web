'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWeb } from '../store'
import { MapThreads } from './'


class Web extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <g>
        <MapThreads web={ this.props.web } />
      </g>
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
