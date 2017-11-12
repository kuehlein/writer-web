'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWeb } from '../store'
import { Thread } from './'

class MapThreads extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Thread />
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


export default connect(MapPropsToProps, MapDispatchToProps)(MapThreads)
