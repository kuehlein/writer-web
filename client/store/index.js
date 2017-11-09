'use strict'

import { combineReducers } from 'redux'

import allProjects from './allProjects'
import web from './web'
import thread from './thread'


const rootReducer = combineReducers({
  allProjects,
  web,
  thread
})


export default rootReducer

export * from  './allProjects'
