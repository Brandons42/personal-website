import React from 'react';

import DynamicImage from '../components/DynamicImage';
import styles from '../styles/certificate.module.scss';

const Certificate = ({ img }) => (
	<DynamicImage className={styles.img} img={img} />
);

export default Certificate;
