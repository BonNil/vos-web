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
				<Section
					darkMode={true}
					heading='OM OSS'
					subheading='Väg & schakt maskiner: The story'
					align='left'
				>
					<div
						style={{
							color: '#fff',
							fontSize: '20px',
							textAlign: 'justify',
							lineHeight: '25px',
						}}
					>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit
							amet risus nullam eget felis eget nunc lobortis. Purus sit amet
							luctus venenatis lectus magna fringilla. Vitae tortor condimentum
							lacinia quis. Aliquet sagittis id consectetur purus ut faucibus.
							Cras sed felis eget velit aliquet sagittis id consectetur purus.
							Facilisis leo vel fringilla est ullamcorper eget nulla facilisi.
							Nec ultrices dui sapien eget mi proin sed libero enim. Malesuada
							fames ac turpis egestas integer eget aliquet. Sit amet facilisis
							magna etiam tempor orci eu lobortis elementum. Pharetra massa
							massa ultricies mi quis hendrerit.
							<br />
							<br />
							Venenatis tellus in metus vulputate eu scelerisque. Diam
							sollicitudin tempor id eu nisl. Urna et pharetra pharetra massa
							massa. Eu scelerisque felis imperdiet proin fermentum. Eget dolor
							morbi non arcu risus quis. Suscipit tellus mauris a diam maecenas
							sed enim ut sem. Nisl nunc mi ipsum faucibus vitae. Platea
							dictumst quisque sagittis purus sit amet volutpat consequat
							mauris. Vestibulum sed arcu non odio euismod.
						</p>
					</div>
				</Section>
				<Section
					darkMode={false}
					heading='ANSTÄLLDA'
					subheading='Våra sinnesjukt kompetenta anställda'
					align='right'
				>
					<Employees />
				</Section>
			</StickyContainer>
		</div>
	);
}

export default App;
