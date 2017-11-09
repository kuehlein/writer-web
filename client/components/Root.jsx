'use strict'

import React from 'react'
import { Navbar, Sidebar } from './'


const Root = ({ children }) => (
  <div>
    <Navbar />
    <Sidebar />
    <div className='main'>
      { children }
    </div>
  </div>
)

export default Root
