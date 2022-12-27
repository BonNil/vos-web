import React from 'react';
import machinesJson from '../../assets/content/machines.json';
import './machines.sass';
import images from './machineImages';

export default function Machines(props) {
	var machineCards = machinesJson.map((machine, i) => {
		const result = images.filter(
			image =>
				image.name.toLowerCase() === machine.name.toLowerCase() &&
				machine.type === props.type
		);
		if (!result[0]) return null;

		return (
			<div
				className='machineWrapper mx-left col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'
				key={`machine-${i}`}
			>
				<div className='machineCard'>
					<div className='card-inner'>
						<div className='image'>
							<img className='portrait' src={result[0].url} alt={result[0].alt}></img>
							{/* <div className='hover-overlay'>
								<span>TILLBEHÖR</span>
								<ul>
									{machine.equipment.map((value, index) => {
										return <li key={`equip-${index}`}>- {value}</li>;
									})}
								</ul>
							</div> */}
						</div>
						<div className='info'>
							<label>{machine.name}</label>
							{machine.ecoClass && <div className='modelYear'>Miljöklass: {machine.ecoClass}</div>}
							<div className='equipment'>
								<ul>
									{machine.equipment.map((value, index) => {
										return <li key={`equip-${index}`}>{value}</li>;
									})}
								</ul>
							</div>
							<div className='role'>{machine.driver}</div>
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
