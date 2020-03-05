import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Image from '../components/Image';
import Layout from '../components/Layout';
import styles from '../styles/design.module.scss';

import albumBack from '../images/album-back.png';
import albumCover from '../images/album-cover.png';
import albumDisc from '../images/album-disc.png';
import artShowPoster from '../images/art-show-poster.png';
import blueMoodBoard from '../images/blue-mood-board.png';
import cards from '../images/cards.png';
import deerGiraffe from '../images/deer-giraffe.png';
import graffiti from '../images/graffiti.png';
import hoth from '../images/hoth.png';
import junkShip from '../images/junk-ship.png';
import kowloonSF from '../images/kowloon-sf.png';
import magazine from '../images/magazine.png';
import mandala from '../images/mandala.png';
import natureEffect from '../images/nature-effect.png';
import poster from '../images/poster.png';
import robot from '../images/robot.png';
import smhsMagazine from '../images/smhs-magazine.png';
import sneaker from '../images/sneaker.png';
import yoda from '../images/yoda.png';

const AlbumBack = () => <Image alt='An album back design' route='album-back' src={albumBack} />;

const AlbumCover = () => <Image alt='An album cover design' route='album-cover' src={albumCover} />;

const AlbumDisc = () => <Image alt='An album disc design' route='album-disc' src={albumDisc} />;

const ArtShowPoster = () => <Image alt='A poster for an art show' route='art-show-poster' src={artShowPoster} />;

const BlueMoodBoard = () => <Image alt='A mood board representing blue colors' route='blue-mood-board' src={blueMoodBoard} />;

const Cards = () => <Image alt='A series of cards with unique designs' route='cards' src={cards} />;

const DeerGiraffe = () => <Image alt="A giraffe with a deer's face" route='deer-giraffe' src={deerGiraffe} />;

const Graffiti = () => <Image alt='My graffiti artwork of my name' route='graffiti' src={graffiti} />;

const Hoth = () => <Image alt='Alterations of Hoth' route='hoth' src={hoth} />;

const JunkShip = () => <Image alt='A junk ship' route='junk-ship' src={junkShip} />;

const KowloonSF = () => <Image alt='A combination of Kowloon and San Francisco' route='kowloon-sf' src={kowloonSF} />;

const Magazine = () => <Image alt='A magazine cover of myself' route='magazine' src={magazine} />;

const Mandala = () => <Image alt='My mandala I made' route='mandala' src={mandala} />;

const NatureEffect = () => <Image alt='Nature effects' route='nature-effect' src={natureEffect} />;

const Poster = () => <Image alt='My propaganda poster' route='poster' src={poster} />;

const Robot = () => <Image alt='A robot character' route='robot' src={robot} />;

const SMHSMagazine = () => <Image alt='A magazine cover' route='smhs-magazine' src={smhsMagazine} />;

const Sneaker = () => <Image alt='A design for a sneaker with a mood board' route='sneaker' src={sneaker} />;

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
					<p>
						I got into art and design not because it had always intrigued me or because I was
						immediately drawn to it, but because my ventures programming apps and websites forced me
						into a position where I had to do lots of graphic design. The graphic design of my software started
						out as a chore, but I eventually came to love it and put much more thought into my design while I
						learned many techniques and tools for design in my Art & Multimedia class in junior year.
						My current artistic style is clean, balanced, and vibrant. My designs often use my favorite
						color, navy blue, as the predominant color, and colors like white, light blue, or red to
						compliment the navy blue. I almost always use easily legible sans-serif fonts for
						body text and unique handwriting or sans-serif fonts for headers.
						My art is often inuenced by my favorite movies, cities, and
						sports teams. When I’m designing an app or website, I
						always try to use design ideas I nd from similar or
						completely dierent software.
					</p>
				</div>
				<div className={styles.gallery}>
					{[AlbumBack, AlbumCover, AlbumDisc, ArtShowPoster, BlueMoodBoard, Cards, DeerGiraffe, Graffiti, Hoth, JunkShip, KowloonSF, Magazine, Mandala, NatureEffect, Poster, Robot, SMHSMagazine, Sneaker, Yoda].map((Img, q) => (
						<div className={styles.box} key={q}>
							<Img />
						</div>
					))}
				</div>
			</Layout>
		);
	}
}