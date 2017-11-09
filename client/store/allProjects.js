'use strict'

import axios from 'axios'


/*------- action types -------*/
const GET_PROJECTS = 'GET_PROJECTS'


/*----- action creators -----*/
export const getProjects = (projects) => ({
  type: GET_PROJECTS,
  projects
})


/*----- thunk creators -----*/
export const fetchProjects = () =>
  dispatch =>
    axios.get('/api/webs/')
      .then(res => dispatch(getProject(res.data)))
      .catch(err => console.log(err))


/*----- reducer -----*/
export default (state = [], action) => {
  switch (action.type) {

    case GET_PROJECTS:
      return action.projects

    default:
      return state
  }
}
