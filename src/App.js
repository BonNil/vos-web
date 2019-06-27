import React from 'react';
import './App.sass';
import 'bootstrap-4-grid';
import TopHero from './components/TopHero';
import AnchorBar from './components/AnchorBar';
import Section from './components/Section';
import Employees from './components/Employees';
import { StickyContainer, Sticky } from 'react-sticky';
import background from './assets/images/hero.jpg';

function App() {
	return (
		<div className='App'>
			<TopHero image={background} />
			<StickyContainer>
				<Sticky>
					{({ style, isSticky }) => (
						<AnchorBar style={style} isSticky={isSticky} />
					)}
				</Sticky>
				<Section image={background}>
					<Employees />
				</Section>
				<Section color='#36393d' />
			</StickyContainer>
		</div>
	);
}

export default App;
