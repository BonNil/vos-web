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
				<h1>VÄG- & Schaktmaskiner AB</h1>
			</div>
		</div>
	);
}
