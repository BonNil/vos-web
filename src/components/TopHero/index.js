import React from 'react';
import './topHero.sass';

export default function TopHero(props) {
	console.log(props.image);
	return (
		<div
			className='topHero'
			style={{
				background: `url(${props.image}) no-repeat`,
				backgroundSize: 'cover',
			}}
		>
			<div className='text-wrap'>
				<h2>VÄG- & Schaktmaskiner AB</h2>
			</div>
		</div>
	);
}
