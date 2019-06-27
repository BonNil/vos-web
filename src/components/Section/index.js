import React from 'react';
import './section.sass';

export default function Section(props) {
	var background = null;
	if (props.image) {
		background = `url(${props.image}) no-repeat`;
	} else {
		background = props.color;
	}

	return (
		<div className='sectionWrapper'>
			{' '}
			<div
				className='section'
				style={{
					background: background,
					backgroundSize: 'cover',
					filter: 'gray',
					WebkitFilter: 'grayscale(100%)',
				}}
			>
				<div className='colorOverlay'></div>
			</div>
			<div className='innerContainer'>{props.children}</div>
		</div>
	);
}
