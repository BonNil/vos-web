import React from 'react';
import employeesJson from '../../assets/content/employees.json';
import './employees.sass';
import images from './employeeImages';

export default function Employees(props) {
	var employeeCards = employeesJson.map((employee, i) => {
		const result = images.filter(
			image => image.name.toLowerCase() === employee.name.toLowerCase()
		);
		if (!result[0]) return null;

		return (
			<div
				className='employeeWrapper mx-auto col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12'
				key={`employee-${i}`}
			>
				<div className='employeeCard'>
					<div>
						<img className='portrait' src={result[0].url}></img>
						<div className='colorOverlay'></div>
					</div>
					<div className='info'>
						<label>{employee.name}</label>
						<div className='started'>{employee.started}</div>
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
