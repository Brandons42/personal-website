import React from 'react';
import { Link } from 'gatsby';

import styles from '../styles/image.module.scss';

const Image = props => (
	<Link className={styles.link} to={`/images/${props.route}`}>
		<img alt={props.alt} className={props.className} src={props.src} />
	</Link>
);

export default Image;
