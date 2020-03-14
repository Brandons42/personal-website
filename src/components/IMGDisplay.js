import React from 'react';
import { navigate } from '@reach/router';

import styles from '../styles/img-display.module.scss';

const IMGDisplay = ({ pageContext: { img } }) => (
	<div className={styles.container}>
		<button className={styles.close} onClick={() => navigate(-1)}>
			<p>Close</p>
		</button>
		<img
			alt={img.alt}
			className={styles.image}
			src={require(`../images/${img.route}.png`)}
		/>
	</div>
);

export default IMGDisplay;
