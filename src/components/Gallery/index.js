import React from 'react';
import Gallery from 'react-photo-gallery';
import photos from './photos';
import './gallery.sass';

export default function ImageGallery() {

	return (
		<div className='imageGallery'>
			<Gallery
				photos={photos}
				onClick={(event, { photo, index }) => window.open(photo.original, "_blank")}
				direction={'column'} />
		</div>
	);
}
