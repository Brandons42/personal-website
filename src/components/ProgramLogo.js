import React from 'react';
import Tooltip from 'react-tooltip-lite';

import styles from '../styles/program-logo.module.scss';

const ProgramLogo = props => {
	const classes = [styles.programImg];

	if (props.state === props.program.name) {
		classes.push(styles.active);
	}

	return (
		<div className={styles.wrapper}>
			<Tooltip
				className={styles.tooltip}
				content={props.program.name}
				useDefaultStyles
			>
				<div
					className={classes.join(' ')}
					onClick={() => props.onClick(props.program.name)}
					style={{ backgroundImage: `url("${props.program.src}")` }}
				/>
			</Tooltip>
		</div>
	);
};

export default ProgramLogo;
