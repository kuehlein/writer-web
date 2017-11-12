'use strict'

import React, { Component } from 'react'
import HTML5Backend from 'react-dnd-html5-backend'
import { Chart, Sidebar, Web, Deck } from './'


const svg = d3.select('body').append('svg')


class Stage extends Component {
  constructor (props) {
    super(props)
  }

  render () {


    return (
      <div className='layer1' >
        All dragging and dropping done in here :)

        <Sidebar className='layer0' />
        <Chart className='layer0' />


      </div>
    )
  }
}


export default DragDropContext(HTML5Backend)(Stage)
