import React from 'react';

import styles from '../styles/tag.module.scss';

const Tag = props => {
	const divStyle = [styles.tag];

	if (props.disabled) {
		divStyle.push(styles.disabled);
	}

	if (props.cursor) {
		divStyle.push(styles.cursor);
	}

	divStyle.push(props.selected ? styles.selected : styles.unselected);

	return (
		<div
			className={divStyle.join(' ')}
			onClick={() => props.onClick(props.text)}
		>
			<p className={styles.text}>{props.text}</p>
		</div>
	);
};

export default Tag;
