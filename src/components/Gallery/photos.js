import a from '../../assets/images/gallery/IMG_7552.jpg';
import b from '../../assets/images/gallery/IMG_7591.jpg';
import c from '../../assets/images/gallery/IMG_7592.jpg';
import d from '../../assets/images/gallery/IMG_7593.jpg';
import e from '../../assets/images/gallery/IMG_7594.jpg';
import f from '../../assets/images/gallery/IMG_7595.jpg';
import g from '../../assets/images/gallery/IMG_7596.jpg';
import h from '../../assets/images/gallery/IMG_7597.jpg';
import i from '../../assets/images/gallery/IMG_7599.jpg';

var images = [a, b, c, d, e, f, g, h, i];

var randomizedImages = [];
images.forEach(image => {
	var width = Math.ceil(Math.random() * 2);
	var height = 1;

	randomizedImages.push({
		src: image,
		width: width,
		height: height,
	});
});

export default randomizedImages;
