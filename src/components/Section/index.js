import React from 'react';
import './section.sass';
import ScrollableAnchor from 'react-scrollable-anchor';

export default function Section(props) {
	const color = props.darkMode
		? {
				heading: '#ffc843',
				subheading: '#fff',
				background: '#5a5e65',
		  }
		: {
				heading: '#ffc843',
				subheading: '#5a5e65',
				background: '#fff',
		  };

	return (
		<ScrollableAnchor id={props.id}>
			<div className='sectionWrapper' style={{ background: color.background }}>
				<div className='innerContainer container'>
					<div className='headingWrapper' style={{ textAlign: props.align }}>
						<h2 className='sectionHeading' style={{ color: color.heading }}>
							{props.heading}
						</h2>
						<h2
							className='sectionSubheading'
							style={{ color: color.subheading }}
						>
							{props.subheading}
						</h2>
					</div>
					{props.children}
				</div>
			</div>
		</ScrollableAnchor>
	);
}
