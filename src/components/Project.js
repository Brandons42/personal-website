import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import DynamicImage from '../components/DynamicImage';
import styles from '../styles/project.module.scss';

const Project = props => (
	<div>
		{props.href ? (
			<OutboundLink href={props.href}>
				<h3>{props.name}</h3>
			</OutboundLink>
		) : (
				<h3>{props.name}</h3>
			)}
		{props.code && (

			<OutboundLink className={styles.spaced} href={props.code}>
				Check out the code
			</OutboundLink>
		)}
		<i className={styles.spaced}>{props.skills}</i>
		{props.desc}
		{props.imgs && (
			<div className={styles.imageContainer}>
				{props.imgs.map((img, q) => (
					<DynamicImage className={styles.image} img={img} key={q} />
				))}
			</div>
		)}
	</div>
);

export default Project;
