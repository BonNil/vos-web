import React from 'react';
import './App.sass';
import 'bootstrap-4-grid';
import TopHero from './components/TopHero';
import AnchorBar from './components/AnchorBar';
import Section from './components/Section';
import Employees from './components/Employees';
import Machines from './components/Machines';
import Footer from './components/Footer';
import { StickyContainer, Sticky } from 'react-sticky';
import background from './assets/images/hero_1920.jpg';
import aboutParagraphs from './assets/content/about.json';

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
				<Section
					darkMode={true}
					id='about'
					heading='OM OSS'
					subheading='Väg & schakt maskiner: The story'
					align='left'
				>
					<div className='paragraph'>
						{aboutParagraphs.map(paragraph => (
							<p>{paragraph}</p>
						))}
					</div>
				</Section>
				<Section
					darkMode={false}
					id='employees'
					heading='ANSTÄLLDA'
					subheading='Våra sinnesjukt kompetenta anställda'
					align='right'
				>
					<Employees />
				</Section>
				<Section
					darkMode={true}
					id='machines'
					heading='MASKINER'
					subheading='Grävmaskiner, schaktmaskiner, lastbilar: Vi har rätt utrustning för jobbet.'
					align='left'
				>
					<Machines />
				</Section>
				<Section
					darkMode={false}
					id='projects'
					heading='PROJEKT'
					subheading='Stort som smått: Vi gör det mesta inom schakt och gräv.'
					align='right'
				></Section>
				<Footer />
			</StickyContainer>
		</div>
	);
}

export default App;
