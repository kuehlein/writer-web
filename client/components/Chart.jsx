'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Square from './Square'

class Chart extends Component {
  renderSquare(i) {
    const x = i % 8
    const y = Math.floor(i / 8)
    const black = (x + y) % 2 === 1

    return (
      <div key={i}
           style={{ width: '1%', height: '1%' }}>
        <Square black={black} />
      </div>
    )
  }

  render() {
    const squares = []
    for (let i = 0; i < 3000; i++) {
      squares.push(this.renderSquare(i))
    }

    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {squares}
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


export default connect(MapPropsToProps, MapDispatchToProps)(Chart)
