'use strict'

import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_THREAD = 'GET_THREAD'
const CREATE_THREAD = 'CREATE_THREAD'
const EDIT_THREAD = 'EDIT_THREAD'
const DELETE_THREAD = 'DELETE_THREAD'

/**
 * ACTION CREATORS
 */
const getThread = thread => ({ type: GET_THREAD, thread })
const createThread = thread => ({ type: CREATE_THREAD, thread })
const editThread = thread => ({ type: EDIT_THREAD, thread })
const deleteThread = thread => ({ type: DELETE_THREAD, thread })

/**
 * THUNK CREATORS
 */
export const fetchThread = (threadId) =>
  dispatch =>
    axios.get(`/api/threads/${threadId}`)
      .then(res => dispatch(getThread(res.data)))
      .catch(err => console.log(err))

export const makeThread = (thread) =>
  dispatch =>
    axios.post('/api/threads/', thread)
      .then(res => dispatch(createThread(res.data)))
      .catch(err => console.log(err))

export const changeThread = (thread) =>
  dispatch => {
    axios.put(`/api/threads/${thread.id}`, thread)
      .then(res => dispatch(editThread(res.data)))
      .catch(err => console.log(err)) }

export const removeThread = (threadId) =>
  dispatch =>
    axios.delete(`/api/threads/${threadId}`)
      .then(res => dispatch(deleteThread(res.data)))
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default (state = {}, action) => {
  switch (action.type) {

    case GET_THREAD:
    case CREATE_THREAD:
    case EDIT_THREAD:
      return action.thread

    case DELETE_THREAD:
    default:
      return state
  }
}
