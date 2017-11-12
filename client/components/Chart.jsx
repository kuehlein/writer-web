'use strict'

import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'
import { DropTarget } from 'react-dnd'
import * as d3 from 'd3'
import { Web } from './'


const random = d3.randomNormal(5, 1)


// Drag sources and drop targets only interact
// if they have the same string type.
// You want to keep types in a separate file with
// the rest of your app's constants.
const Types = {
  CHESSPIECE: 'chesspiece'
};

/**
 * Specifies the drop target contract.
 * All methods are optional.
 */
const chessSquareTarget = {
  canDrop(props, monitor) {
    // You can disallow drop based on props or item
    const item = monitor.getItem();
    return canMakeChessMove(item.fromPosition, props.position);
  },

  hover(props, monitor, component) {
    // This is fired very often and lets you perform side effects
    // in response to the hover. You can't handle enter and leave
    // here—if you need them, put monitor.isOver() into collect() so you
    // can just use componentWillReceiveProps() to handle enter/leave.

    // You can access the coordinates if you need them
    const clientOffset = monitor.getClientOffset();
    const componentRect = findDOMNode(component).getBoundingClientRect();

    // You can check whether we're over a nested drop target
    const isJustOverThisOne = monitor.isOver({ shallow: true });

    // You will receive hover() even for items for which canDrop() is false
    const canDrop = monitor.canDrop();
  },

  drop(props, monitor, component) {
    if (monitor.didDrop()) {
      // If you want, you can check whether some nested
      // target already handled drop
      return;
    }

    // Obtain the dragged item
    const item = monitor.getItem();

    // You can do something with it
    ChessActions.movePiece(item.fromPosition, props.position);

    // You can also do nothing and return a drop result,
    // which will be available as monitor.getDropResult()
    // in the drag source's endDrag() method
    return { moved: true };
  }
};


@DropTarget(Types.CHESSPIECE, chessSquareTarget, (connect, monitor) => ({
  // Call this function inside render()
  // to let React DnD handle the drag events:
  connectDropTarget: connect.dropTarget(),
  // You can ask the monitor about the current drag state:
  isOver: monitor.isOver(),
  isOverCurrent: monitor.isOver({ shallow: true }),
  canDrop: monitor.canDrop(),
  itemType: monitor.getItemType()
}))
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


export default connect(MapPropsToProps, MapDispatchToProps)(Chart)
