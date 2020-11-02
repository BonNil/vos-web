import a from '../../assets/images/gallery/IMG_7552.webp';
import b from '../../assets/images/gallery/IMG_7591.webp';
import c from '../../assets/images/gallery/IMG_7592.webp';
import d from '../../assets/images/gallery/IMG_7593.webp';
import e from '../../assets/images/gallery/IMG_7594.webp';
import f from '../../assets/images/gallery/IMG_7595.webp';
import g from '../../assets/images/gallery/IMG_7596.webp';
import h from '../../assets/images/gallery/IMG_7597.webp';
import i from '../../assets/images/gallery/IMG_7599.webp';

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
