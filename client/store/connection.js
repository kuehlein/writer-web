'use strict'

import axios from 'axios'


/*------- action types -------*/
const GET_CONNECTION = 'GET_CONNECTION'


/*----- action creators -----*/
export const getConnection = connection => ({
  type: GET_CONNECTION,
  connection
})


/*----- thunk creators -----*/
export const fetchConnection = connectionId =>
  dispatch =>
    axios.get(`/api/threads/connections/${connectionId}`)
      .then(res => dispatch(getConnection(res.data)))
      .catch(err => console.log(err))


/*----- reducer -----*/
export default (state = {}, action) => {
  switch (action.type) {

    case GET_CONNECTION:
      return action.connection

    default:
      return state
  }
}
