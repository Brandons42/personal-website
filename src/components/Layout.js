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
			<p>© {new Date().getFullYear()} Brandon Suen</p>
			<Link to='/design'>Design gallery</Link>
			<Link to='/privacy'>Privacy policy</Link>
			<a href='/sitemap.xml'>Sitemap</a>
		</footer>
	</div>
);

export default Layout;
