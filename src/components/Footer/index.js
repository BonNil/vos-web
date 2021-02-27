import React from 'react';
import logo from '../../assets/images/new_logo.webp';
import './footer.sass';

export default function Footer(props) {
	return (
		<div className='footer'>
			<img src={logo} height='100' />
		</div>
	);
}
