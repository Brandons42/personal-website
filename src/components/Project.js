import React from 'react';

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
	</div>
);

export default Project;
