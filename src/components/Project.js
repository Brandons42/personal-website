import React from 'react';

import DynamicImage from '../components/DynamicImage';
import styles from '../styles/project.module.scss';

const Project = props => (
	<div>
		{props.href ? (
			<a href={props.href}>
				<h3>{props.name}</h3>
			</a>
		) : (
				<h3>{props.name}</h3>
			)}
		{props.code && (
			<a className={styles.spaced} href={props.code}>
				Check out the code
			</a>
		)}
		<i className={styles.spaced}>{props.skills}</i>
		{props.desc}
		{props.imgs && (
			<div className={styles.imageContainer}>
				{props.imgs.map(img => (
					<DynamicImage className={styles.image} img={img} />
				))}
			</div>
		)}
	</div>
);

export default Project;
