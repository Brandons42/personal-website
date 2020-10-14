import React from 'react';
import { Link } from 'gatsby';
import DynamicImage from '../components/DynamicImage';
import Layout from '../components/Layout';
import programs from '../programs';
import styles from '../styles/online-courses.module.scss';

const {
	edXAgileCert,
	fccJSCert,
	fccRWDCert,
	kaggleMLCert,
	kagglePythonCert,
	jpMorganChaseCert,
	udacityDRLNDCert
} = require('../../img-data');

const DImage = ({ img }) => <DynamicImage className={styles.img} img={img} />;

const Header = ({ children, href }) => (
	<h4>
		<a href={href} target='_blank'>
			{children}
		</a>
	</h4>
);

const OnlineCourses = () => (
	<Layout title='Online Courses'>
		<div className={styles.title}>
			<h2>Online Courses</h2>
		</div>
		<div className={styles.content} id='freeCodeCamp'>
			<h3>{programs.freeCodeCamp.name}</h3>
			<Link to={'/projects?program=' + programs.freeCodeCamp.name}>
				See projects I've made for the {programs.freeCodeCamp.name} curriculum
			</Link>
			<Header href='https://www.freecodecamp.org/certification/brandons42/responsive-web-design'>
				Responsive Web Design Certification
			</Header>
			<DImage img={fccRWDCert} />
			<Header href='https://www.freecodecamp.org/certification/brandons42/javascript-algorithms-and-data-structures'>
				JavaScript Algorithms and Data Structures Certification
			</Header>
			<DImage img={fccJSCert} />
			<h3>{programs.drlnd.name}</h3>
			<Link to={'/projects?program=' + programs.drlnd.name}>
				See projects I've made for the {programs.drlnd.name} curriculum
			</Link>
			<Header href='https://confirm.udacity.com/GNEDA6YE'>
				Deep Reinforcement Learning Nanodegree
			</Header>
			<DImage img={udacityDRLNDCert} />
			<h3>Forage</h3>
			<Header href='https://insidesherpa.s3.amazonaws.com/completion-certificates/JP%20Morgan/R5iK7HMxJGBgaSbvk_JPMorgan%20Chase_MEPQbTyfJ63yY6n4b_completion_certificate.pdf'>
				JPMorgan Chase Software Engineering Virtual Internship
			</Header>
			<DImage img={jpMorganChaseCert} />
			<h3>edX</h3>
			<Header href='https://courses.edx.org/certificates/7f28da8378f24d35b898e5561af432eb'>
				Agile Development Using Ruby on Rails - The Basics
			</Header>
			<DImage img={edXAgileCert} />
			<h3>Kaggle</h3>
			<Header href='https://www.kaggle.com/learn/certification/brandons42/python'>
				Python
			</Header>
			<DImage img={kagglePythonCert} />
			<Header href='https://www.kaggle.com/learn/certification/brandons42/intro-to-machine-learning'>
				Intro to Machine Learning
			</Header>
			<DImage img={kaggleMLCert} />
		</div>
	</Layout>
);

export default OnlineCourses;
