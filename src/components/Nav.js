import React from 'react';
import { Link } from 'gatsby';
import { navigate } from '@reach/router';

import logo from '../images/bsuen-logo.svg';

import styles from '../styles/nav.module.scss';

const Nav = props => (
	<div className={styles.nav}>
		<Link to='/'>
			<img alt='Brandon Suen' className={styles.logo} src={logo} />
		</Link>
		<div className={styles.textLinks}>
			{/*<Link className={styles.link} to='/about'>
				About
			</Link>*/}
			{props.design ? (
				<Link className={styles.link} to='/'>
					My developer profile
				</Link>
			) : (
				<Link className={styles.link} to='/projects'>
					Projects
				</Link>
			)}
			<a href='#contact'>
				<button className={styles.button}>
					<a href='#contact'>Contact</a>
				</button>
			</a>
		</div>
	</div>
);

export default Nav;
