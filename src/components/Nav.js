import React from 'react';
import { Link } from 'gatsby';

import logo from '../images/bsuen-logo.svg';
//import NavLink from './NavLink';

import styles from '../styles/nav.module.scss';

const Nav = () => (
	<div className={styles.nav}>
		<Link to='/'>
			<a>
				<img alt='Image of Brandon Suen' className={styles.logo} src={logo} />
			</a>
		</Link>
		{/*<NavLink name='Apps' route='/apps' />*/}
	</div>
);

export default Nav;
