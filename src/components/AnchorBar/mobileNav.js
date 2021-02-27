import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './mobileNav.sass';

export default function MobileNav(props) {
	const [toggled, setToggled] = useState(false);

	const mobileItems = props.items.map((item, i) => (
		<React.Fragment key={`mobileItem_${i}`}>
			<li
				className='anchorItem'
				onClick={() => {
					setToggled(false);
				}}
			>
				<a href={item.anchor}>{item.title}</a>{' '}
				{<span className='slash'>/</span>}
			</li>
		</React.Fragment>
	));

	return (
		<div class="row">
			<FontAwesomeIcon
				size='2x'
				icon={faBars}
				onClick={() => {
					setToggled(!toggled);
				}}
			/>
			{toggled && <ul className='anchorList'>{mobileItems}</ul>}
		</div>
	);
}
