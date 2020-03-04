import React from 'react';
import { Link } from 'gatsby';

const DynamicImage = props => (
	<Link to={`/images/${props.img.route}`}>
		<img alt={props.img.alt} className={props.className} src={require(`../images/${props.img.route}.${props.img.ex}`)} />
	</Link>
);

export default DynamicImage;