/*import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/Image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage*/
import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import Nav from '../components/Nav';
import styles from '../styles/index.module.scss';
import '../styles/reset.css';

export default class Home extends React.Component {
	//Animations on scroll, page title
	render() {
		return (
			<div className={styles.outer}>
				<Nav />
				<div className={styles.initial}>
					<p className={styles.initialText}>
						Welcome to the official website of Brandon Suen
					</p>
				</div>
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
							className={styles.banner}
							fluid={data.desktop.childImageSharp.fluid}
							backgroundColor={`#040e18`}
							style={{ position: 'fixed' }}
						>
							<div className={styles.titleContainer}>
								<h1 className={styles.title}>Brandon Suen</h1>
								<h3 className={styles.desc}>Mobile App Developer |</h3>
								<h3 className={styles.desc}>Full-stack Web Developer |</h3>
								<h3 className={styles.desc}>Software Developer</h3>
							</div>
							<div className={styles.gradient} />
						</BackgroundImage>
					)}
				/>
				<div className={styles.content}>
					<div className={styles.blue}>
						<p>
							Hi, my name is Brandon. Thanks for coming to my website. I'm a
							programmer forever driven by a passion to build and learn new
							things.
						</p>
					</div>
					<div className={styles.white}>
						<h2>My Stack</h2>
						<p>
							To build my websites, I use Next.js, which is a framework that
							employs server side rendering with React.js on the front-end. I
							use Sass for styling and am comfortable with Node.js and back-ends
							made with Express.js. I make my mobile apps using the React Native
							framework that employs the Javascript language.
						</p>
					</div>
					<div className={styles.white}>
						<h2>Featured Work</h2>
						<a href='https://itunes.apple.com/us/app/quiz-watch/id1454913754?ls=1&mt=8'>
							<h3>Quiz Watch</h3>
						</a>
						<i>React Native, Redux, JavaScript</i>
						<p>
							Quiz Watch, on the iOS App Store now, is the app you need to test
							and add to your knowledge. Using this app will enhance your Quiz
							Bowl or general trivia prowess, all while you're having a great
							time. You can keep track of your statistics and track your
							improvement. Furthermore, you can configure settings to get the
							questions at the right difficulty level and served at the right
							speed for you. You can even bookmark questions you're interested
							in reviewing later on.
						</p>
						<h3>This Website</h3>
						<i>React, Gatsby, SCSS, JavaScript</i>
						<a href='https://brandons42.github.io/calculator'>
							<h3>Calculator</h3>
						</a>
						<a href='https://github.com/Brandons42/calculator'>
							<p>See the code</p>
						</a>
						<i>React, SCSS, Parcel, Babel, JavaScript</i>
						<p>
							Hosted on Github Pages, this is a simple calculator that obeys the
							order of operations built for the{' '}
							<a href='https://www.freecodecamp.org'>freecodecamp.org</a>{' '}
							curriculum.
						</p>
						<a href='https://brandons42.github.io/google-homepage'>
							<h3>Google Homepage</h3>
						</a>
						<a href='https://github.com/Brandons42/google-homepage'>
							<p>See the code</p>
						</a>
						<i>HTML, CSS</i>
						<p>
							Hosted on Github Pages, this is a recreation of Google's
							homepage(in 2017) built for the{' '}
							<a href='https://www.freecodecamp.org'>freecodecamp.org</a>{' '}
							curriculum.
						</p>
						<a href='https://brandons42.github.io/markdown'>
							<h3>Markdown Previewer</h3>
						</a>
						<a href='https://github.com/Brandons42/markdown'>
							<p>See the code</p>
						</a>
						<i>React, SCSS, Parcel, Babel, JavaScript</i>
						<p>
							Hosted on Github Pages, this is a Markdown previewer built for the{' '}
							<a href='https://www.freecodecamp.org'>freecodecamp.org</a>{' '}
							curriculum.
						</p>
						{/*<Carousel showArrows>
              <div>
                <img className='' src='/static/quiz-watch-logo.png' />
                <p className='legend'>Quiz watch</p>
              </div>
            </Carousel>*/}
					</div>
				</div>
			</div>
		);
	}
}
