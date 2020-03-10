import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import Calculator from '../components/Calculator';
import Layout from '../components/Layout';
import LinkedIn from '../components/LinkedIn';
import QuizWatch from '../components/QuizWatch';
import resume from '../images/resume.png';
import styles from '../styles/index.module.scss';

const resumeHref = '/brandon-suen-resume.pdf';

const ResumeLink = props => (
	<a download href={resumeHref} target='_blank'>
		{props.children}
	</a>
);

export default class Home extends React.Component {
	state = {
		opacity: 0
	};

	_activate = () => this.setState({ opacity: 0.2 });

	_deactivate = () => this.setState({ opacity: 0 });

	render() {
		return (
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
							style={{ position: 'fixed' }}
						>
							<div className={styles.titleContainer}>
								<h1 className={styles.title}>Brandon Suen</h1>
								<h3 className={styles.desc}>Full-stack Web Developer |</h3>
								<h3 className={styles.desc}>React Native App Developer</h3>
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
								I'm a programmer forever driven by a passion to build and learn
								new things. To build my websites, I use React.js on the
								front-end. I use Sass for styling and Node.js on the back-end. I
								make my mobile apps using the React Native framework. If you'd
								like me to build you an app or website or you'd like to get in
								touch for another reason, feel free to connect with me on
								LinkedIn or <a href='#contact'>contact me below</a>.
							</p>
						</div>
						<LinkedIn />
					</div>
					<div className={styles.resumeWhite}>
						<h2>Résumé</h2>
						<div className={styles.resumeContainer}>
							<div>
								<ResumeLink>
									<img
										alt="Brandon Suen's resume"
										className={styles.resume}
										src={resume}
									/>
									<div
										className={styles.overlay}
										onMouseOver={this._activate}
										onMouseLeave={this._deactivate}
										style={{ opacity: this.state.opacity }}
									/>
								</ResumeLink>
							</div>
							<p className={styles.resumeLinks}>
								<ResumeLink>Download*</ResumeLink>
								{'   |   '}
								<a href={resumeHref} target='_blank'>
									Open in new tab
								</a>
							</p>
							<p className={styles.small}>*Not supported in all browsers</p>
						</div>
					</div>
					<div className={styles.white}>
						<h2>Featured Work</h2>
						<QuizWatch />
						<Calculator />
						<Link to='/projects'>
							<h3 className={styles.center}>See more projects</h3>
						</Link>
					</div>
				</div>
				<script
					type='text/javascript'
					src='https://platform.linkedin.com/badges/js/profile.js'
					async
					defer
				></script>
			</Layout>
		);
	}
}
