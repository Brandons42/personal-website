import React from 'react';

import Project from '../Project';
import skills from '../../skills';
import tech from '../../tech';

const name = 'Markdown Previewer';
const projSkills = [skills.frontEnd];
const projTech = [
	tech.react,
	tech.scss,
	tech.parcel,
	tech.babel,
	tech.javaScript
];

const Markdown = props => (
	<Project
		code='https://github.com/Brandons42/markdown'
		desc={
			<p>
				Hosted on Github Pages, this is a Markdown previewer built for the{' '}
				<a href='https://www.freecodecamp.org'>freeCodeCamp</a> curriculum.
			</p>
		}
		href='https://brandons42.github.io/markdown'
		name={name}
		onClickTag={props.onClickTag}
		selectedTags={props.selectedTags}
		skills={projSkills}
		tech={projTech}
	/>
);

export default Markdown;

export const markdown = {
	Component: Markdown,
	name,
	projSkills,
	projTech
};
