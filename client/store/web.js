'use strict'

import axios from 'axios'


/*------- action types -------*/
const GET_WEB = 'GET_WEB'


/*----- action creators -----*/
export const getWeb = (web) => ({
  type: GET_WEB,
  web
})


/*----- thunk creators -----*/
export const fetchWeb = () =>
  dispatch =>
    axios.get('/api/projects/')
      .then(res => dispatch(getWeb(res.data)))
      .catch(err => console.log(err))


/*----- reducer -----*/
export default (state = [], action) => {
  switch (action.type) {

    case GET_WEB:
      return action.web

    default:
      return state
  }
}
