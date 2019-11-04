import React from 'react';
import './App.sass';
import 'bootstrap-4-grid';
import TopHero from './components/TopHero';
import AnchorBar from './components/AnchorBar';
import Section from './components/Section';
import Employees from './components/Employees';
import Machines from './components/Machines';
import ImageGallery from './components/Gallery';
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
					subheading='Och vad vi kan göra för dig'
					align='left'
				>
					<div className='col-md-12 paragraph'>
						{aboutParagraphs.map(paragraph => (
							<p>{paragraph}</p>
						))}
					</div>
				</Section>
				<Section
					darkMode={false}
					id='employees'
					heading='ANSTÄLLDA'
					subheading='Vår viktigaste resurs'
					align='right'
				>
					<Employees />
				</Section>
				<Section
					darkMode={true}
					id='machines'
					heading='MASKINER'
					subheading='Toppmoderna och väl underhållna'
					align='left'
				>
					<Machines />
				</Section>
				<Section
					darkMode={false}
					id='gallery'
					heading='BILDGALLERI'
					subheading='Foton på utrustning, projektarbete, anställda mm.'
					align='right'
				>
					<ImageGallery />
				</Section>
				<Section
					darkMode={true}
					id='projects'
					heading='PROJEKT'
					subheading='Stort som smått: Vi gör det mesta inom schakt och gräv.'
					align='left'
				></Section>
				<Footer />
			</StickyContainer>
		</div>
	);
}

export default App;
