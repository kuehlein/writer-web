'use strict'

import axios from 'axios'


/*------- action types -------*/
const GET_CONNECTIONS = 'GET_CONNECTIONS'


/*----- action creators -----*/
export const getConnections = connections => ({
  type: GET_CONNECTIONS,
  connections
})


/*----- thunk creators -----*/
export const fetchConnections = webId =>
  dispatch =>
    axios.get(`/api/threads/connections/${webId}`)
      .then(res => dispatch(getConnections(res.data)))
      .catch(err => console.log(err))


/*----- reducer -----*/
export default (state = [], action) => {
  switch (action.type) {

    case GET_CONNECTIONS:
      return action.connections

    default:
      return state
  }
}
