import React from 'react';
import { Link } from 'gatsby';

import Certificate from '../components/Certificate';
import Layout from '../components/Layout';
import programs from '../programs';
import styles from '../styles/experiences.module.scss';

const { cssi, udacityDRLNDCert } = require('../../img-data');

const Experiences = () => (
	<Layout title='Experiences'>
		<div className={styles.title}>
			<h2>Experiences</h2>
		</div>
		<div className={styles.content}>
			<h3>Google CSSI Student</h3>
			<Certificate img={cssi} />
			<h3>Full-Stack Developer Intern at Reputationaire</h3>

			<a href='https://confirm.udacity.com/GNEDA6YE' target='_blank'>
				<h3>Udacity Deep Reinforcement Learning Nanodegree</h3>
			</a>

			<Link to={'/projects?program=' + programs.drlnd.name}>
				See projects I've made for the {programs.drlnd.name} curriculum
			</Link>
			<Certificate img={udacityDRLNDCert} />
		</div>
	</Layout>
);

export default Experiences;
