import React from 'react';

import Layout from '../components/Layout';
import styles from '../styles/404.module.scss';

const NotFoundPage = () => (
	<Layout title='404: Not found'>
		<div>
			<h2 className={styles.header}>NOT FOUND</h2>
			<p className={styles.body}>
				You just hit a route that doesn&#39;t exist... the sadness.
			</p>
		</div>
	</Layout>
);

export default NotFoundPage;
