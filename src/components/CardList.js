import React from 'react';

import Card from './Card'

const CardList = ({employees}) => {
	const cardComponents = employees.map((employee, i) => {
		return <Card key={i} id={employees[i].id} name={employees[i].name} email={employees[i].email}/>
	})
	return (
		<div>
	    	{cardComponents}
	    </div>
    )
}

export default CardList