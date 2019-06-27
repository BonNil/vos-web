import React from 'react';
import employeesJson from '../../assets/content/employees.json';
import './employees.sass';
import images from './employeeImages';

export default function Employees(props) {
	console.log(employeesJson);

	var employeeCards = employeesJson.map((employee, i) => {
		const result = images.filter(image => image.name === employee.name);
		console.log(result);
		if (!result[0]) return null;

		return (
			<div className='employeeCard' key={`employee-${i}`}>
				<div>
					<img className='portrait' src={result[0].url}></img>
					<div className='colorOverlay'></div>
				</div>
				<div className='info'>
					<label>
						<b>{employee.name}</b>
					</label>
					<div className='started'>Anställd sedan {employee.started}</div>
					<div className='role'>{employee.role}</div>
				</div>
			</div>
		);
	});

	return <div className='employees container'>{employeeCards}</div>;
}
