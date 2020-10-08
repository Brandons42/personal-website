import React from 'react';

import Project from '../Project';
import skills from '../../skills';
import tech from '../../tech';

const name = 'Personal Website';
const projSkills = [skills.frontEnd];
const projTech = [tech.react, tech.gatsby, tech.scss, tech.javaScript];

const Personal = props => (
	<Project
		code='https://github.com/Brandons42/personal-website'
		desc={<p>This website is live now, hosted with Netlify.</p>}
		name={name}
		onClickTag={props.onClickTag}
		selectedTags={props.selectedTags}
		skills={projSkills}
		tech={projTech}
	/>
);

export default Personal;

export const personal = {
	Component: Personal,
	name,
	projSkills,
	projTech
};
