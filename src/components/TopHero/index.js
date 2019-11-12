import React from 'react';
import './topHero.sass';

export default function TopHero(props) {
	return (
		<div
			className='topHero'
			style={{
				background: `url(${props.image}) no-repeat`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			<div className='container'>
				<div className='col-12 text-wrap'>
					<h1>VÄG- & Schaktmaskiner AB</h1>
				</div>
			</div>
		</div>
	);
}
