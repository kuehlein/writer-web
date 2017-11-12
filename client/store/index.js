'use strict'

import { combineReducers } from 'redux'

import allProjects from './allProjects'
import web from './web'
import thread from './thread'
import connection from './connection'


const rootReducer = combineReducers({
  allProjects,
  web,
  thread,
  connection
})


export default rootReducer

export * from './allProjects'
export * from './web'
export * from './thread'
export * from './connection'
export * from './itemTypes'
