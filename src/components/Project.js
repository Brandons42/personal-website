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
		<div className={styles.titleContainer}>
			{props.href ? (
				<OutboundLink href={props.href} target='_blank'>
					<h3>{props.name}</h3>
				</OutboundLink>
			) : (
				<h3>{props.name}</h3>
			)}
			{/*props.program && (
				<OutboundLink href={props.href} target='_blank'>
					<img alt={props.}
				</OutboundLink>
			)*/}
		</div>
		{props.code && (
			<OutboundLink className={styles.code} href={props.code} target='_blank'>
				Check out the code
			</OutboundLink>
		)}
		<i className={styles.spaced}>{props.skills.join(', ')}</i>
		{props.tech && (
			<div className={styles.techs}>
				{props.tech.map((tech, i) => (
					<Tag
						cursor={props.cursor}
						key={i}
						onClick={props.onClickTag}
						selected={props.selectedTags.includes(tech)}
						text={tech}
					/>
				))}
			</div>
		)}
		{props.related && (
			<p className={styles.related}>
				Related projects:{' '}
				{props.related.map((project, i) => (
					<a className={styles.link} href={'#' + project} key={i}>
						{project}
					</a>
				))}
			</p>
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
