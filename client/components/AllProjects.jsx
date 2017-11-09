'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'

class AllProjects extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    <div>
      All Projects
    </div>
  }

}

const MapPropsToProps = () => ({})

const MapDispatchToProps = () => ({})


export default connect(MapPropsToProps, MapDispatchToProps)(AllProjects)
