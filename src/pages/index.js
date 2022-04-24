import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import Layout from '../components/Layout';
import LinkedIn from '../components/LinkedIn';
import QuizWatch from '../components/projects/QuizWatch';
import Tennis from '../components/projects/Tennis';
import WordSprint from '../components/projects/WordSprint';
import resume from '../images/resume.png';
import styles from '../styles/index.module.scss';

const resumeHref = '/brandon-suen-resume.pdf';

const ResumeLink = props => (
	<a download href={resumeHref} rel='noopener noreferrer' target='_blank'>
		{props.children}
	</a>
);

const Home = () => (
	<Layout title='Home'>
		<StaticQuery
			query={graphql`
				query {
					desktop: file(relativePath: { eq: "fountain.jpg" }) {
						childImageSharp {
							fluid(quality: 100) {
								...GatsbyImageSharpFluid_withWebp
							}
						}
					}
				}
			`}
			render={data => (
				<BackgroundImage
					Tag='div'
					backgroundColor={`#040e18`}
					className={styles.banner}
					fluid={data.desktop.childImageSharp.fluid}
					style={{ backgroundPosition: '70% 0%', position: 'fixed' }}
				>
					<div className={styles.titleContainer}>
						<h1 className={styles.title}>Brandon Suen</h1>
						<h3 className={styles.desc}>Software Engineer,</h3>
						<h3 className={styles.desc}>Student at UC Berkeley</h3>
					</div>
					<div className={styles.gradient} />
				</BackgroundImage>
			)}
		/>
		<div className={styles.content}>
			<div className={styles.bio}>
				<div className={styles.bioText}>
					<h3>Who I am</h3>
					<p>
						I'm a programmer forever driven by a passion to build and learn new
						things. I've built many websites and published apps on the iOS App
						Store, and I'm currently studying at the University of California,
						Berkeley. If you'd like me to build you an app or website or you'd
						like to get in touch for another reason, feel free to connect with
						me on LinkedIn or <a href='#contact'>contact me below</a>.
					</p>
				</div>
				<LinkedIn />
			</div>
			<div className={styles.white}>
				<div>
					<h2>Résumé</h2>
					<div className={styles.resumeSectionContainer}>
						<div className={styles.resumeContainer}>
							<ResumeLink>
								<img
									alt="Brandon Suen's resume"
									className={styles.resume}
									src={resume}
								/>
							</ResumeLink>
						</div>
						<p className={styles.resumeLinks}>
							<ResumeLink>Download</ResumeLink>
							{'   |   '}
							<a href={resumeHref} rel='noopener noreferrer' target='_blank'>
								Open in new tab
							</a>
						</p>
					</div>
				</div>
			</div>
			<div className={styles.featured}>
				<h2>Featured Projects</h2>
				<QuizWatch onClickTag={() => {}} selectedTags={[]} />
				<WordSprint onClickTag={() => {}} selectedTags={[]} />
				<Tennis onClickTag={() => {}} selectedTags={[]} />
				<Link to='/projects'>
					<h3 className={styles.center}>See more projects</h3>
				</Link>
			</div>
		</div>
	</Layout>
);

export default Home;
