'use strict'

import React from 'react'
import { Navbar, Sidebar } from './'


const Root = ({ children }) => (
  <div>
    <Navbar className='layer3' />
    <div className='main'>
      { children }
    </div>
  </div>
)

export default Root
