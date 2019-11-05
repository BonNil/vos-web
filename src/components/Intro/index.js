import React from 'react';
import aboutParagraphs from '../../assets/content/about.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFutbol,
	faRoad,
	faWater,
	faBuilding,
} from '@fortawesome/free-solid-svg-icons';
import './intro.sass';

export default function Intro(props) {
	return (
		<div className='intro'>
			<div className='col-md-12 paragraph'>
				{aboutParagraphs.map(paragraph => (
					<p>{paragraph}</p>
				))}
				<p>
					<b>
						Nedan är ett urplock av de projekttyper vi tar oss an, men vi gör
						också mycket annat. Kontakta oss så berättar vi mer!
					</b>
				</p>
			</div>
			<div className='projects container'>
				<div className='row'>
					<div className='project col-sm-6 col-12'>
						<FontAwesomeIcon size='5x' icon={faFutbol} />
						<p>
							Golfbanor, paddockar, travbanor, fotbollsplaner mm. Vi har stor
							erfarenhet inom markarbete för olika sport- och
							fritidsanläggningar.
						</p>
					</div>
					<div className='project col-sm-6 col-12'>
						<FontAwesomeIcon size='5x' icon={faRoad} />
						<p>
							Vägarbeten i alla dess former, stora som små. Vi har
							framgångsrikt utfört denna typ av arbete i många år.
						</p>
					</div>
					<div className='project col-sm-6 col-12'>
						<FontAwesomeIcon size='5x' icon={faWater} />
						<p>
							Dammar och vattenanläggningar har vi stark kompetens inom, och har
							många projekt av denna typ i ryggen.
						</p>
					</div>
					<div className='project col-sm-6 col-12'>
						<FontAwesomeIcon size='5x' icon={faBuilding} />
						<p>
							Schakt- och planeringsarbete för byggprojekt är vårt levebröd, och
							därför också ett område vi har extensiv kunskap inom.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
