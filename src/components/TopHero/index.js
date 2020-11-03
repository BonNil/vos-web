import React from 'react';
import './topHero.sass';

export default function TopHero(props) {
	let smallScreen = false;
	if (window && window.innerWidth <= 576) {
		smallScreen = true;
	}

	const heroStyles = {
		background: smallScreen ? `url(${props.mobileImage}) no-repeat` : `url(${props.image}) no-repeat`,
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	};

	if (smallScreen) {
		heroStyles.height = 300;
	}

	return (
		<div
			className='topHero'
			style={heroStyles}
		>
			<div className='container'>
				<div className='col-12 text-wrap'>
					<h1>VÄG- & Schaktmaskiner AB</h1>
				</div>
			</div>
		</div>
	);
}
