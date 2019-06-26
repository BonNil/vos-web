import React from 'react';
import './App.sass';
import TopHero from './components/TopHero';
import AnchorBar from './components/AnchorBar';
import EmployeesSection from './components/EmployeesSection';
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
				<EmployeesSection />
				<EmployeesSection />
			</StickyContainer>
		</div>
	);
}

export default App;
