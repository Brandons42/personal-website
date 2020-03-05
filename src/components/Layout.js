import React from 'react';
import { Link } from 'gatsby';

import Contact from './Contact';
import Nav from './Nav';
import SEO from './SEO';
import styles from '../styles/layout.module.scss';
import '../styles/reset.css';

const Layout = props => (
	<div>
		<SEO title={props.title} />
		<Nav design={props.design} />
		<main className={styles.content}>{props.children}</main>
		<Contact />
		<footer className={styles.footer}>
			<Link to='/design'>Design gallery</Link>
			<p>© {new Date().getFullYear()} Brandon Suen</p>
			<Link to='/privacy'>Privacy policy</Link>
		</footer>
	</div>
);

export default Layout;
