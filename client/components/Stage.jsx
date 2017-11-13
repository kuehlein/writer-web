'use strict'

import React, { Component } from 'react'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import * as d3 from 'd3'
import { ThreadedChart, Sidebar } from './'


const svg = d3.select('body').append('svg')


class Stage extends Component {
  constructor (props) {
    super(props)
  }

  render () {


    return (
      <div className='layer1' >

        <Sidebar className='layer0' />
        <ThreadedChart className='layer0' />


      </div>
    )
  }
}


export default DragDropContext(HTML5Backend)(Stage)
