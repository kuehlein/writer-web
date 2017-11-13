'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Square extends Component {
  render() {
    const { black } = this.props
    const fill = black ? 'black' : 'white' // '#1b1a19'
    const stroke = black ? 'white' : 'black' // '#1b1a19'

    return (
      <div style={{
        backgroundColor: fill,
        color: stroke,
        width: '30px',
        height: '30px'
      }}>
        {this.props.children}
      </div>
    )
  }
}

Square.propTypes = {
  black: PropTypes.bool
}
