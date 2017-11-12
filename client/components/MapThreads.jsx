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
    const threads = this.props.web

    return (
      <div>
        { threads &&
          threads.map(thread => (
            <div key={ thread._id } >
              <Thread thread={ thread } />
            </div>
          ))
        }
      </div>
    )
  }

}

const MapDispatchToProps = dispatch => ({
  fetchWeb: web => dispatch(fetchWeb(web))
})


export default connect(null, MapDispatchToProps)(MapThreads)
