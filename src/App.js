import React, { lazy } from 'react';
import './App.sass';
import 'bootstrap-4-grid';
import TopHero from './components/TopHero';
import AnchorBar from './components/AnchorBar';
import Section from './components/Section';
import Footer from './components/Footer';
import { StickyContainer, Sticky } from 'react-sticky';
import background from './assets/images/hero.webp';
import mobileBg from './assets/images/mobile_hero_768.webp';

const Intro = lazy(() => import('./components/Intro'));
const Employees = lazy(() => import('./components/Employees'));
const Machines = lazy(() => import('./components/Machines'));
const ImageGallery = lazy(() => import('./components/Gallery'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
	return (
		<div className='App'>
			<TopHero image={background} mobileImage={mobileBg} />
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
					subheading='Maskinentreprenad i Skåne med generationers erfarenhet'
					align='left'
				>
					<Intro />
				</Section>
				<Section
					darkMode={true}
					id='employees'
					heading='ANSTÄLLDA'
					subheading='Vår viktigaste resurs'
					align='left'
				>
					<Employees />
				</Section>
				<Section
					darkMode={false}
					id='bulldozers'
					heading='BANDTRAKTORER'
					subheading='Stora maskiner, stora blad, stora resultat'
					align='left'
				>
					<Machines type='bulldozer' />
				</Section>
				<Section
					darkMode={true}
					id='excavators'
					heading='GRÄVMASKINER'
					subheading='Moderna, utrustade och väl underhållna'
					align='left'
				>
					<Machines type='excavator' />
				</Section>
				<Section
					darkMode={false}
					id='wheeledExcavators'
					heading='HJULGRÄVARE'
					subheading='Moderna, utrustade och väl underhållna'
					align='left'
				>
					<Machines type='wheeledExcavator' />
				</Section>
				<Section
					darkMode={true}
					id='wheeledLoaders'
					heading='HJULLASTARE'
					subheading='Moderna, utrustade och väl underhållna'
					align='left'
				>
					<Machines type='wheeledLoader' />
				</Section>
				<Section
					darkMode={false}
					id='misc-machines'
					heading='ÖVRIGA MASKINER'
					subheading=''
					align='left'
				>
					<Machines type='misc' />
				</Section>
				<Section
					darkMode={true}
					id='gallery'
					heading='BILDGALLERI'
					subheading='Foton på utrustning, projektarbete, anställda mm.'
					align='left'
				>
					<ImageGallery />
				</Section>
				<Section
					darkMode={false}
					id='contact'
					heading='KONTAKT'
					subheading='Hör av dig till oss med ditt projekt'
					align='center'
				>
					<Contact />
				</Section>
				<Footer />
			</StickyContainer>
		</div>
	);
}

export default App;
