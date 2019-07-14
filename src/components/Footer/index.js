import React from 'react';
import logo from '../../assets/images/original_logo.png';
import './footer.sass';

export default function Footer(props) {
	return (
		<div className='footer'>
			<img src={logo} height='100' />
		</div>
	);
}
