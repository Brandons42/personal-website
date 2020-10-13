import React from 'react';

import Layout from '../components/Layout';
import styles from '../styles/college.module.scss';

const College = () => (
	<Layout title='College Coursework'>
		<div className={styles.title}>
			<h2>College Coursework</h2>
			<p>I'm a student in the College of Letters & Science at UC Berkeley.</p>
		</div>
		<div className={styles.content}>
			<h3>Fall 2020</h3>
			<div className={styles.indent}>
				<ul>
					<p>
						<a href='https://classes.berkeley.edu/content/2020-fall-classic-r44-001-lec-001'>
							CLASSIC R44: Roots of Western Civilization
						</a>
					</p>
					<p>
						<a href='https://classes.berkeley.edu/content/2020-fall-compsci-61b-001-lec-001'>
							COMPSCI 61B: Data Structures
						</a>
					</p>
					<p>
						<a href='https://classes.berkeley.edu/content/2020-fall-eecs-16a-001-lec-001'>
							EECS 16A: Designing Information Devices and Systems I
						</a>
					</p>
					<p>
						<a href='https://classes.berkeley.edu/content/2020-fall-nusctx-10-001-lec-001'>
							NUSCTX 10: Introduction to Human Nutrition
						</a>
					</p>
					<p>
						<a href='https://classes.berkeley.edu/content/2020-fall-ugis-192e-005-tut-005'>
							UGIS 192E: Supervised Research: Interdisciplinary Studies
						</a>
					</p>
				</ul>
			</div>
			<h3>Summer 2020</h3>
			<div className={styles.indent}>
				<ul>
					<p>
						<a href='https://classes.berkeley.edu/content/2020-summer-compsci-61a-001-lec-001'>
							COMPSCI 61A: The Structure and Interpretation of Computer Programs
						</a>
					</p>
				</ul>
			</div>
		</div>
	</Layout>
);

export default College;
