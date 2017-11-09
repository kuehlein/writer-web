'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWeb } from '../store'

class Web extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    <div>
      Web
    </div>
  }

}

const MapPropsToProps = state => ({
  web: state.web
})

const MapDispatchToProps = dispatch => ({
  fetchWebs: web => dispatch(fetchWeb(web))
})


export default connect(MapPropsToProps, MapDispatchToProps)(Web)
