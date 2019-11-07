import React from 'react';
import './App.sass';
import 'bootstrap-4-grid';
import TopHero from './components/TopHero';
import Intro from './components/Intro';
import AnchorBar from './components/AnchorBar';
import Section from './components/Section';
import Employees from './components/Employees';
import Machines from './components/Machines';
import ImageGallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { StickyContainer, Sticky } from 'react-sticky';
import background from './assets/images/hero_1920.jpg';

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
					darkMode={false}
					id='about'
					heading='OM OSS'
					subheading='Och vad vi kan göra för dig'
					align='left'
				>
					<Intro />
				</Section>
				<Section
					darkMode={true}
					id='contact'
					heading='KONTAKT'
					subheading='Hör av dig till oss med ditt projekt'
					align='center'
				>
					<Contact />
				</Section>
				<Section
					darkMode={false}
					id='employees'
					heading='ANSTÄLLDA'
					subheading='Vår viktigaste resurs'
					align='left'
				>
					<Employees />
				</Section>
				<Section
					darkMode={true}
					id='excavators'
					heading='GRÄVMASKINER'
					subheading='Moderna, utrustade och väl underhållna'
					align='left'
				>
					<Machines type="excavator" />
				</Section>
				<Section
					darkMode={false}
					id='bulldozers'
					heading='BANDTRAKTORER'
					subheading='Moderna, utrustade och väl underhållna'
					align='left'
				>
					<Machines type="bulldozer" />
				</Section>
				<Section
					darkMode={true}
					id='misc-machines'
					heading='ÖVRIGA MASKINER'
					subheading='Moderna, utrustade och väl underhållna'
					align='left'
				>
					<Machines type="misc" />
				</Section>
				<Section
					darkMode={false}
					id='gallery'
					heading='BILDGALLERI'
					subheading='Foton på utrustning, projektarbete, anställda mm.'
					align='left'
				>
					<ImageGallery />
				</Section>
				<Footer />
			</StickyContainer>
		</div>
	);
}

export default App;
