import a from '../../assets/images/gallery/IMG_7552.JPG';
import b from '../../assets/images/gallery/IMG_7591.JPG';
import c from '../../assets/images/gallery/IMG_7592.JPG';
import d from '../../assets/images/gallery/IMG_7593.JPG';
import e from '../../assets/images/gallery/IMG_7594.JPG';
import f from '../../assets/images/gallery/IMG_7595.JPG';
import g from '../../assets/images/gallery/IMG_7596.JPG';
import h from '../../assets/images/gallery/IMG_7597.JPG';
import i from '../../assets/images/gallery/IMG_7598.JPG';
import j from '../../assets/images/gallery/IMG_7599.JPG';

var images = [a, b, c, d, e, f, g, h, i, j];

var randomizedImages = [];
images.forEach(image => {
	var width = Math.ceil(Math.random() * 2);
	var height = Math.ceil(Math.random() * 2);

	randomizedImages.push({
		src: image,
		width: width,
		height: height,
	});
});

export default randomizedImages;
