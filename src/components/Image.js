import React from 'react';
import { Link } from 'gatsby';

const Image = props => (
	<Link to={`/images/${props.route}`}>
		<img alt={props.alt} className={props.className} src={props.src} />
	</Link>
);

export default Image;