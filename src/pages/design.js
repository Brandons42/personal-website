import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Contact from '../components/Contact';
import Image from '../components/Image';
import Layout from '../components/Layout';
import styles from '../styles/design.module.scss';

import graffiti from '../images/graffiti.png';
import magazine from '../images/magazine.png';
import mandala from '../images/mandala.png';
import poster from '../images/poster.png';
import yoda from '../images/yoda.png';

const Graffiti = () => <Image alt='My graffiti artwork of my name' route='graffiti' src={graffiti} />;

const Magazine = () => <Image alt='A magazine cover of myself' route='magazine' src={magazine} />;

const Mandala = () => <Image alt='My mandala I made' route='mandala' src={mandala} />;

const Poster = () => <Image alt='My propaganda poster' route='poster' src={poster} />;

const Yoda = () => <Image alt='My Yoda illustration' route='yoda' src={yoda} />;

export default class Design extends React.Component {
	render() {
		return (
			<Layout design title='Design Gallery'>
				<div className={styles.container}>
					<h1 className={styles.header}>My Design Gallery</h1>
				</div>
				<Carousel autoPlay infiniteLoop showThumbs={false} useKeyboardArrows>
					<div className={styles.slideDiv}>
						<Graffiti />
						<p className='legend'>Graffiti Art</p>
					</div>
					<div className={styles.slideDiv}>
						<Magazine />
						<p className='legend'>Legend 2</p>
					</div>
					<div className={styles.slideDiv}>
						<Mandala />
						<p className='legend'>Legend 3</p>
					</div>
					<div className={styles.slideDiv}>
						<Poster />
						<p className='legend'>Legend 3</p>
					</div>
					<div className={styles.slideDiv}>
						<Yoda />
						<p className='legend'>Legend 3</p>
					</div>
				</Carousel>
				<div className={styles.bio}>
					<h3>Artist Bio</h3>
				</div>
				<div className={styles.gallery}>
					{[Graffiti, Magazine, Mandala, Poster, Yoda].map((Img, q) => (
						<div className={styles.box} key={q}>
							<Img />
						</div>
					))}
				</div>
				<Contact />
			</Layout>
		);
	}
}