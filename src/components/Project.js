import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { Carousel } from 'react-responsive-carousel';

//import DynamicImage from '../components/DynamicImage';
import Image from '../components/Image';
import Tag from '../components/Tag';
import styles from '../styles/project.module.scss';
import '../styles/arrow-overide.scss';

const Project = props => (
	<div className={styles.container} id={props.name}>
		{props.href ? (
			<OutboundLink href={props.href}>
				<h3>{props.name}</h3>
			</OutboundLink>
		) : (
			<h3>{props.name}</h3>
		)}
		{props.code && (
			<OutboundLink className={styles.code} href={props.code}>
				Check out the code
			</OutboundLink>
		)}
		<i className={styles.spaced}>{props.skills}</i>
		{props.tech && (
			<div className={styles.techs}>
				{props.tech.map((tech, i) => (
					<Tag
						key={i}
						onClick={props.onClickTag}
						selected={props.selectedTags.includes(tech)}
						text={tech}
					/>
				))}
			</div>
		)}
		{props.desc}
		{/*props.imgs && (
			<div className={styles.imageContainer}>
				{props.imgs.map((img, q) => (
					<DynamicImage className={styles.image} img={img} key={q} />
				))}
			</div>
				)*/}
		{props.imgs && (
			<Carousel
				autoPlay
				className={styles.carousel}
				infiniteLoop
				showThumbs={false}
				useKeyboardArrows
			>
				{props.imgs.map((img, i) => (
					<div className={styles.slideDiv} key={i}>
						<Image
							alt={img.alt}
							route={img.route}
							src={require(`../images/${img.route}.png`)}
						/>
					</div>
				))}
			</Carousel>
		)}
	</div>
);

export default Project;
