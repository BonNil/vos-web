import React from 'react';
import MediaQuery from 'react-responsive';
import MobileNav from './mobileNav';

import './anchorBar.sass';

export default class AnchorBar extends React.Component {
	render = () => {
		const things = [
			{ title: 'OM OSS', anchor: '#about' },
			{ title: 'ANSTÄLLDA', anchor: '#employees' },
			{ title: 'MASKINER', anchor: '#bulldozers' },
			{ title: 'BILDER', anchor: '#gallery' },
			{ title: 'KONTAKT', anchor: '#contact' },
		];

		const desktopItems = things.reverse().map((item, i) => (
			<React.Fragment key={`desktopItem_${i}`}>
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
				<MediaQuery maxWidth={768}>
					<MobileNav items={things} />
				</MediaQuery>
				<MediaQuery minWidth={769}>
					<ul className='anchorList'>{desktopItems}</ul>
				</MediaQuery>
			</div>
		);
	};
}
