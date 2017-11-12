'use strict'

import axios from 'axios'


/**
 * INITIAL STATE
 */
const initialState = {
  name: 'untitled',
  content: 'Drag Me :)',
  x: {
    x1: 20,
    x2: 20,
    x3: 60,
    x4: 60
  },
  y: {
    y1: 30,
    y2: 70,
    y3: 70,
    y4: 30
  },
  strokeWidth: 5,
  stroke: '#e0d9ce',
  fill: '#1b1a19',
  connections: [],
}

/**
 * ACTION TYPES
 */
const GET_THREAD = 'GET_THREAD'
const CREATE_THREAD = 'CREATE_THREAD'
const THREAD_CHANGE = 'THREAD_CHANGE'

/**
 * ACTION CREATORS
 */
const getThread = thread => ({ type: GET_THREAD, thread })
const createThread = thread => ({ type: CREATE_THREAD, thread })
const threadChange = thread => ({ type: THREAD_CHANGE, thread })

/**
 * THUNK CREATORS
 */
export const fetchThread = threadId =>
  dispatch =>
    axios.get(`/api/threads/${threadId}`/* , relationship */)
      .then(res => dispatch(getThread(res.data)))
      .catch(err => console.log(err))

export const makeThread = thread =>
  dispatch =>
    axios.post('/api/threads/', thread)
      .then(res => dispatch(createThread(res.data)))
      .catch(err => console.log(err))

export const sendUpdate = thread =>
  dispatch => dispatch(threadChange(thread))

/**
 * REDUCER
 */
export default (state = initialState, action) => {
  switch (action.type) {

    case GET_THREAD:
    case CREATE_THREAD:
      return action.thread

    case THREAD_CHANGE:
      return Object.assign({}, state, action.thread)

    default:
      return state
  }
}
