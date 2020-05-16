import React, {Component} from 'react';
import {connect} from 'react-redux';

import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'

import {setSearch, fetchEmployees} from '../actions'

import './App.css'

const mapStateToProps = state => {
	return {
		searchField: state.searchEmployees.searchField,
		employees: state.displayEmployees.employees,
		error: state.displayEmployees.error,
		isPending: state.displayEmployees.isPending
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSearchChange: (event) => dispatch(setSearch(event.target.value)),
		onLoadEmployees: () => dispatch(fetchEmployees())
	}
}

class App extends Component {
	render() {
		const {searchField, onSearchChange, employees, isPending} = this.props
		const filteredEmployees = employees.filter((robot) => robot.name.toLowerCase().includes(searchField.toLowerCase()))
		return isPending
				? (<h1 className="tc">Loading</h1>)
				: (
					<div className="tc">
						<h1 className="f1">EmployeeRegister</h1>
						<SearchBox onSearchChange={onSearchChange}/>
						<Scroll>
							<ErrorBoundary>
								<CardList employees={filteredEmployees} />
							</ErrorBoundary>
						</Scroll>
					</div>
				)
	}

	componentDidMount() {
		this.props.onLoadEmployees()
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);