import React from 'react';
import { Link } from 'gatsby';

import burger from '../images/burger.png';
import logo from '../images/bsuen-logo.svg';

import styles from '../styles/nav.module.scss';

const resizeSize = 825;

export default class Nav extends React.Component {
	state = { expand: false };

	componentDidMount() {
		window.addEventListener('resize', this.resize);
		this.resize();
	}

	resize = () => this.setState({ width: window.innerWidth });

	toggleExpansion = () => {
		if (this.state.width <= resizeSize) {
			this.setState({ expand: !this.state.expand });
		}
	};

	componentWillUnmount() {
		window.removeEventListener('resize', this.resize);
	}

	render() {
		return (
			<div className={styles.nav} onClick={this.toggleExpansion}>
				<Link to='/'>
					<img alt='Brandon Suen' className={styles.logo} src={logo} />
				</Link>
				{((this.state.width && this.state.width > resizeSize) ||
					this.state.expand) && (
					<div className={styles.textLinks}>
						{this.props.design ? (
							<Link className={styles.link} to='/'>
								My developer profile
							</Link>
						) : (
							<>
								<Link className={styles.link} to='/college'>
									College
								</Link>
								<Link className={styles.link} to='/experiences'>
									Experiences
								</Link>
								<Link className={styles.link} to='/online-courses'>
									Online Courses
								</Link>
								<Link className={styles.link} to='/projects'>
									Projects
								</Link>
							</>
						)}
						<a className={styles.buttonLink} href='#contact'>
							<button className={styles.button}>Contact</button>
						</a>
					</div>
				)}
				{this.state.width && this.state.width <= resizeSize && (
					<img alt='Burger menu icon' className={styles.burger} src={burger} />
				)}
			</div>
		);
	}
}
