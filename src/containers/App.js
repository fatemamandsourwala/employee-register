import React, {Component} from 'react';

import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'

import './App.css'

class App extends Component {
	constructor(){
		super();
		this.state = {
			employees: [],
			searchtext: ""
		}
	}

	onSearchChange = (event) => {
		this.setState({
			searchtext: event.target.value
		})
	}

	render() {
		const {employees, searchtext} = this.state
		const filteredEmployees = employees.filter((robot) => robot.name.toLowerCase().includes(searchtext.toLowerCase()))
		return !employees.length
				? (<h1 className="tc">Loading</h1>)
				: (
					<div className="tc">
						<h1 className="f1">EmployeeRegister</h1>
						<SearchBox onSearchChange={this.onSearchChange}/>
						<Scroll>
							<ErrorBoundary>
								<CardList employees={filteredEmployees} />
							</ErrorBoundary>
						</Scroll>
					</div>
				)
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({employees: users}))
	}
}

export default App;