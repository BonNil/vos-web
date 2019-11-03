import React from 'react';
import './anchorBar.sass';

export default class AnchorBar extends React.Component {
	render = () => {
		var things = [
			{ title: 'OM OSS', anchor: '#about' },
			{ title: 'ANSTÄLLDA', anchor: '#employees' },
			{ title: 'MASKINER', anchor: '#machines' },
			{ title: 'BILDER', anchor: '#gallery' },
			{ title: 'PROJEKT', anchor: '#projects' },
			{ title: 'KONTAKT', anchor: '#contact' },
		];

		var listItems = things.reverse().map((item, i) => (
			<React.Fragment key={`anchorItem_${i}`}>
				<li className='anchorItem'>
					<a href={item.anchor}>{item.title}</a>
				</li>
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
