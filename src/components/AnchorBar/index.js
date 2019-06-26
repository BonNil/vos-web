import React from 'react';
import './anchorBar.sass';

export default class AnchorBar extends React.Component {
	render = () => {
		var things = ['JUICE', 'KAFFE', 'BANAN', 'ÄPPLE', 'RAMEN'];

		var listItems = things.map((item, i) => (
			<React.Fragment key={`anchorItem_${i}`}>
				<li className='anchorItem'>{item}</li>
				{i + 1 !== things.length && <div className='slash'>/</div>}
			</React.Fragment>
		));

		return (
			<div
				className={this.props.isSticky ? 'anchorBar sticky' : 'anchorBar'}
				style={this.props.style}
			>
				<ul className='anchorList'>{listItems}</ul>
			</div>
		);
	};
}
