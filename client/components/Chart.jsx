'use strict'

import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'
import { DropTarget } from 'react-dnd'
import * as d3 from 'd3'

import { Web } from './'


const Types = { THREAD_WEB: 'THREAD_WEB' }

const random = d3.randomNormal(5, 1)


// Specifies which props to inject into your component
const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    itemType: monitor.getItemType()
  }
}


class Chart extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: d3.range(200).map(() => [random(), random()]),
      zoomTransform: null
    }
    this.zoom = d3.zoom()
                  .scaleExtent([-5, 5])
                  .translateExtent([[-100, -100], [props.width + 100, props.height + 100]])
                  .extent([[-100, -100], [props.width + 100, props.height + 100]])
                  .on('zoom', this.zoomed.bind(this))
  }

  componentDidMount () {
    d3.select(this.refs.svg).call(this.zoom)
  }

  componentDidUpdate () {
    d3.select(this.refs.svg).call(this.zoom)
  }

  zoomed () {
    this.setState({ zoomTransform: d3.event.transform })
  }


  // do i need to render draggable items outside of the drop target???
  render () {
    const { zoomTransform } = this.state
    const { width, height, connectDropTarget } = this.props

    return /*connectDropTarget*/(
      <svg width={ width } height={ height } ref='svg'>
        <Web data={ this.state.data }
             x={ 0 } y={ 0 }          // change this???
             width={ width / 2 }
             height={ height }
             zoomTransform={ zoomTransform }
             zoomType='scale'/>
      </svg>
    )
  }

}

const MapPropsToProps = state => ({
  web: state.web
})

const MapDispatchToProps = dispatch => ({
  fetchWeb: web => dispatch(fetchWeb(web))
})


DropTarget(Types.THREAD_WEB, {}, collect)(Chart)
export default connect(MapPropsToProps, MapDispatchToProps)(Chart)
