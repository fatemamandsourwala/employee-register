import {CHANGE_SEARCH_FIELD,
		REQUEST_EMPLOYEES_PENDING,
		REQUEST_EMPLOYEES_SUCCESS,
		REQUEST_EMPLOYEES_FAILED} from './constants'

export const setSearch = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
})

export const fetchEmployees = () => (dispatch) => {
	dispatch({type: REQUEST_EMPLOYEES_PENDING})
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(data => dispatch({type: REQUEST_EMPLOYEES_SUCCESS, payload: data}))
		.catch(error => dispatch({type: REQUEST_EMPLOYEES_FAILED, payload: error}))
}