import React from 'react';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { Carousel } from 'react-responsive-carousel';

//import DynamicImage from './DynamicImage';
import Image from './Image';
import ProgramLogo from './ProgramLogo';
import Tag from './Tag';
import styles from '../styles/project.module.scss';
import '../styles/arrow-overide.scss';

const Project = props => (
	<div className={styles.container} id={props.name.replace(/\s/g, '')}>
		<div className={styles.titleContainer}>
			{props.href ? (
				<OutboundLink href={props.href} target='_blank'>
					<h3>{props.name}</h3>
				</OutboundLink>
			) : (
				<h3>{props.name}</h3>
			)}
			{props.program && (
				<ProgramLogo
					onClick={props.onClickProgram}
					program={props.program}
					state={props.programState}
				/>
			)}
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
					<Link
						className={styles.link}
						key={i}
						to={'/projects#' + project.replace(/\s/g, '')}
					>
						{project}
					</Link>
				))}
			</p>
		)}
		{props.desc}
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
							src={require(`../images/${img.route}.${
								img.ext ? img.ext : 'png'
							}`)}
						/>
					</div>
				))}
			</Carousel>
		)}
	</div>
);

export default Project;
