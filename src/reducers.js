import {CHANGE_SEARCH_FIELD,
		REQUEST_EMPLOYEES_PENDING,
		REQUEST_EMPLOYEES_SUCCESS,
		REQUEST_EMPLOYEES_FAILED} from './constants'

const initialStateSearch = {
	searchField: ''
}

export const searchEmployees = (state=initialStateSearch, action={}) => {
	switch(action.type) {
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, {searchField: action.payload})
		default:
			return state
	}
}

const initialStateEmployees = {
	isPending: false,
	employees: [],
	error: ''
}

export const displayEmployees = (state=initialStateEmployees, action={}) => {
	switch(action.type) {
		case REQUEST_EMPLOYEES_PENDING:
			return Object.assign({}, state, {isPending: true})
		case REQUEST_EMPLOYEES_SUCCESS:
			return Object.assign({}, state, {isPending: false, employees: action.payload})
		case REQUEST_EMPLOYEES_FAILED:
			return Object.assign({}, state, {isPending: false, error: action.payload})
		default:
			return state
	}
}