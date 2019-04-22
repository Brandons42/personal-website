import React from 'react';

import Calculator from '../components/Calculator';
import Layout from '../components/Layout';
import Project from '../components/Project';
import QuizWatch from '../components/QuizWatch';
import styles from '../styles/projects.module.scss';

const Projects = () => (
	<Layout title='Projects'>
		<div className={styles.container}>
			<div>
				<h2>Projects</h2>
			</div>
			<QuizWatch />
			<Calculator />
			<Project
				code='https://github.com/Brandons42/google-homepage'
				desc={
					<p>
						Hosted on Github Pages, this is a recreation of Google's homepage(in
						2017) built for{' '}
						<a href='https://www.theodinproject.com/'>The Odin Project's</a>{' '}
						curriculum.
					</p>
				}
				href='https://brandons42.github.io/google-homepage'
				name='Google Homepage'
				skills='HTML, CSS'
			/>
			<Project
				code='https://github.com/Brandons42/personal-website'
				desc={<p>This website is live now, hosted with Netlify.</p>}
				name='Personal Website'
				skills='React, Gatsby.js, SCSS, JavaScript'
			/>
			<Project
				code='https://github.com/Brandons42/markdown'
				desc={
					<p>
						Hosted on Github Pages, this is a Markdown previewer built for the{' '}
						<a href='https://www.freecodecamp.org'>freeCodeCamp</a> curriculum.
					</p>
				}
				href='https://brandons42.github.io/markdown'
				name='Markdown Previewer'
				skills='React, SCSS, Parcel, Babel, JavaScript'
			/>
		</div>
	</Layout>
);

export default Projects;
