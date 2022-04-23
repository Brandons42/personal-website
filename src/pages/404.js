import React from 'react';

import Layout from '../components/Layout';
import styles from '../styles/404.module.scss';

const NotFoundPage = () => (
	<Layout title='404: Not found'>
		<div>
			<h2 className={styles.header}>Not Found</h2>
			<p className={styles.body}>
				Sorry, but the page you're looking for doesn't seem to be here.
			</p>
		</div>
	</Layout>
);

export default NotFoundPage;
