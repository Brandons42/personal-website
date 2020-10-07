import React from 'react';

import Layout from '../components/Layout';
import styles from '../styles/projects.module.scss';

import { calculator } from '../components/projects/Calculator';
import { geographist } from '../components/projects/Geographist';
import { google } from '../components/projects/Google';
import { markdown } from '../components/projects/Markdown';
import { memRoll } from '../components/projects/MemRoll';
import { personal } from '../components/projects/Personal';
import { quizWatch } from '../components/projects/QuizWatch';

export default class Projects extends React.Component {
	projects = [
		calculator,
		geographist,
		google,
		markdown,
		memRoll,
		personal,
		quizWatch
	];

	render() {
		return (
			<Layout title='Projects'>
				<div className={styles.container}>
					<div className={styles.title}>
						<h2>Personal Projects</h2>
						<p>Hi</p>
					</div>
					<div className={styles.content}>
						<div className={styles.navBar}>
							{this.projects.map(({ name }) => (
								<p>
									<a href={'#' + name}>{name}</a>
								</p>
							))}
						</div>
						<div className={styles.projects}>
							{this.projects.map(({ Component }) => (
								<Component />
							))}
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}
