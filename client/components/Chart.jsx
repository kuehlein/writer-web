'use strict'

import React, { Component } from 'react'
import Web from './Web'

const random = d3.randomNormal(5, 1)


class Chart extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: d3.range(200).map(_ => [random(), random()]),
      zoomTransform: null
    }
    this.zoom = d3.zoom()
                  .scaleExtent([-5, 5])
                  .translateExtent([[-100, -100], [props.width + 100, props.height + 100]])
                  .extent([[-100, -100], [props.width + 100, props.height + 100]])
                  .on('zoom', this.zoomed.bind(this))
  }
  componentDidMount () {
    d3.select(this.refs.svg)
      .call(this.zoom)
  }
  componentDidUpdate () {
    d3.select(this.refs.svg)
      .call(this.zoom)
  }
  zoomed () {
    this.setState({
      zoomTransform: d3.event.transform
    })
  }
  render () {
    const { zoomTransform } = this.state
    const { width, height } = this.props
    return (
      <svg width={ width } height={ height } ref='svg'>
        <Web data={ this.state.data }
             x={ 0 } y={ 0 }          // change this???
             width={ width / 2 }
             height={ height }
             zoomTransform={ zoomTransform }
             zoomType='scale' />
      </svg>
    )
  }
}
