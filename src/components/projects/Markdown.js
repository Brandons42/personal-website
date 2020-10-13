import React from 'react';

import Project from '../Project';
import programs from '../../programs';
import skills from '../../skills';
import tech from '../../tech';

const { markdownPreviewer } = require('../../../img-data');

const name = 'Markdown Previewer';
const projProgram = programs.freeCodeCamp;
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
		cursor={props.cursor}
		desc={
			<p>
				Hosted on Github Pages, this is a Markdown previewer built for the{' '}
				<a href='https://www.freecodecamp.org' target='_blank'>
					freeCodeCamp
				</a>{' '}
				curriculum.
			</p>
		}
		href='https://brandons42.github.io/markdown'
		imgs={[markdownPreviewer]}
		name={name}
		onClickTag={props.onClickTag}
		program={projProgram}
		selectedTags={props.selectedTags}
		skills={projSkills}
		tech={projTech}
	/>
);

export default Markdown;

export const markdown = {
	Component: Markdown,
	name,
	projProgram,
	projSkills,
	projTech
};
