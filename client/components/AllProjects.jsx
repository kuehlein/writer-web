'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProjects } from '../store'

class AllProjects extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        All Projects
      </div>
    )
  }

}

const MapPropsToProps = state => ({
  projects: state.allProjects
})

const MapDispatchToProps = dispatch => ({
  fetchProjects: projects => dispatch(fetchProjects(projects))
})


export default connect(MapPropsToProps, MapDispatchToProps)(AllProjects)
