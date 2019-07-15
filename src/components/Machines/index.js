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
				className='machineWrapper col-md-6 col-sm-6 col-12'
				key={`machine-${i}`}
			>
				<div className='machineCard'>
					<div>
						<img className='portrait' src={result[0].url}></img>
						<div className='colorOverlay'></div>
					</div>
					<div className='info'>
						<label>{machine.name}</label>
						<div className='modelYear'>Årsmodell {machine.modelYear}</div>
						<div className='role'>Caterpillar</div>
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
