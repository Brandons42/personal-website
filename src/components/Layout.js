import React from 'react';
import { Link } from 'gatsby';

import Nav from './Nav';
import SEO from './SEO';
import styles from '../styles/layout.module.scss';
import '../styles/reset.css';

const Layout = props => (
	<div>
		<SEO title={props.title} />
		<Nav />
		<main className={styles.content}>{props.children}</main>
		<footer className={styles.footer}>
			<p>© {new Date().getFullYear()} Brandon Suen</p>
			<Link to='/privacy'>Privacy policy</Link>
		</footer>
	</div>
);

export default Layout;
