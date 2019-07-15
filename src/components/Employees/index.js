import React from 'react';
import employeesJson from '../../assets/content/employees.json';
import './employees.sass';
import images from './employeeImages';

export default function Employees(props) {
	console.log(employeesJson);

	var employeeCards = employeesJson.map((employee, i) => {
		console.log(employee.name);
		const result = images.filter(
			image => image.name.toLowerCase() === employee.name.toLowerCase()
		);
		console.log(result);
		if (!result[0]) return null;

		return (
			<div
				className='employeeWrapper col-md-3 col-sm-6 col-12'
				key={`employee-${i}`}
			>
				<div className='employeeCard'>
					<div>
						<img className='portrait' src={result[0].url}></img>
						<div className='colorOverlay'></div>
					</div>
					<div className='info'>
						<label>{employee.name}</label>
						<div className='started'>Anställd sedan {employee.started}</div>
						<div className='role'>{employee.role}</div>
					</div>
				</div>
			</div>
		);
	});

	return (
		<div className='employees container'>
			<div className='row'>{employeeCards}</div>
		</div>
	);
}
