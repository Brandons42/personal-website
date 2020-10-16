import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import DynamicImage from '../components/DynamicImage';
import Layout from '../components/Layout';
import styles from '../styles/design.module.scss';

const {
	albumBack,
	albumCover,
	albumDisc,
	artShowPoster,
	blueMoodBoard,
	cards,
	deerGiraffe,
	graffiti,
	hoth,
	junkShip,
	kowloonSF,
	magazine,
	mandala,
	natureEffect,
	poster,
	robot,
	smhsMagazine,
	sneaker,
	yoda
} = require('../../img-data');

const imgList = [
	albumBack,
	albumCover,
	albumDisc,
	artShowPoster,
	blueMoodBoard,
	cards,
	deerGiraffe,
	graffiti,
	hoth,
	junkShip,
	kowloonSF,
	magazine,
	mandala,
	natureEffect,
	poster,
	robot,
	smhsMagazine,
	sneaker,
	yoda
];

export default class Design extends React.Component {
	render() {
		return (
			<Layout design title='Design Gallery'>
				<div className={styles.container}>
					<h1 className={styles.header}>My Design Gallery</h1>
				</div>
				<Carousel autoPlay infiniteLoop showThumbs={false} useKeyboardArrows>
					{[poster, magazine, graffiti, yoda, mandala].map((img, q) => (
						<div className={styles.slideDiv} key={q}>
							<DynamicImage img={img} />
						</div>
					))}
				</Carousel>
				<div className={styles.bio}>
					<h3>Artist Bio</h3>
					<p>
						I got into art and design not because it had always intrigued me or
						because I was immediately drawn to it, but because my ventures
						programming apps and websites forced me into a position where I had
						to do lots of graphic design. The graphic design of my software
						started out as a chore, but I eventually came to love it and put
						much more thought into my design while I learned many techniques and
						tools for design in my Art & Multimedia class in junior year. My
						current artistic style is clean, balanced, and vibrant. My designs
						often use my favorite color, navy blue, as the predominant color,
						and colors like white, light blue, or red to compliment the navy
						blue. I almost always use easily legible sans-serif fonts for body
						text and unique handwriting or sans-serif fonts for headers. My art
						is often inuenced by my favorite movies, cities, and sports teams.
						When I’m designing an app or website, I always try to use design
						ideas I find from similar or completely dierent software.
					</p>
				</div>
				<div className={styles.gallery}>
					{imgList.map((img, q) => (
						<div className={styles.box} key={q}>
							<DynamicImage img={img} />
						</div>
					))}
				</div>
			</Layout>
		);
	}
}
