import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './contact.sass';

export default function Intro(props) {
	return (
		<div className='contact container'>
			<div className='row'>
				<div className='contact-item col-sm-6 col-12'>
					<a href='tel:0705868553'>
						<FontAwesomeIcon size='4x' icon={faMobileAlt} />
					</a>
					<a href='tel:0705868553'>070-58 68 553</a>
				</div>
				<div className='contact-item col-sm-6 col-12'>
					<a href='robban@vagochschaktmaskiner.se'>
						<FontAwesomeIcon size='4x' icon={faEnvelope} />
					</a>
					<a href='mailto:robban@vagochschaktmaskiner.se'>
						robban@vagochschaktmaskiner.se
					</a>
				</div>
			</div>
		</div>
	);
}
