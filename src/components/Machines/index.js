import React from 'react';
import machinesJson from '../../assets/content/machines.json';
import './machines.sass';
import images from './machineImages';

export default function Machines(props) {
	console.log(machinesJson);

	var machineCards = machinesJson.map((machine, i) => {
		console.log(machine.name);
		const result = images.filter(
			image => image.name.toLowerCase() === machine.name.toLowerCase()
		);
		console.log(result);
		if (!result[0]) return null;

		return (
			<div
				className='machineWrapper mx-auto col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12'
				key={`machine-${i}`}
			>
				<div className='machineCard'>
					<div className='card-inner'>
						<div className='image'>
							<img className='portrait' src={result[0].url}></img>
							<div className='hover-overlay'>
								<span>TILLBEHÖR</span>
								<ul>
									{machine.equipment.map((value, index) => {
										return <li key={`equip-${index}`}>- {value}</li>;
									})}
								</ul>
							</div>
						</div>
						<div className='info'>
							<label>{machine.name}</label>
							<div className='modelYear'>Förare: {machine.driver}</div>
							<div className='role'>{machine.ecoClass}</div>
						</div>
					</div>
				</div>
			</div>
		);
	});

	return (
		<div className='machines container'>
			<div className='row'>{machineCards}</div>
		</div>
	);
}
