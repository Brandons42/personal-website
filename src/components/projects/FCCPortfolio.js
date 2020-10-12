import React from 'react';

import Project from '../Project';
import programs from '../../programs';
import skills from '../../skills';
import tech from '../../tech';

const { fccPortfolio1, fccPortfolio2 } = require('../../../img-data');

const name = 'freeCodeCamp Portfolio';
const projProgram = programs.freeCodeCamp;
const projSkills = [skills.frontEnd];
const projTech = [tech.html, tech.css, tech.javaScript];

const FCCPortfolio = props => (
	<Project
		code='https://github.com/Brandons42/fcc-portfolio'
		cursor={props.cursor}
		desc={
			<p>
				A simple portfolio I made to display the projects I made for the
				freeCodeCamp curriculum.
			</p>
		}
		href='https://brandons42.github.io/fcc-portfolio/'
		imgs={[fccPortfolio1, fccPortfolio2]}
		name={name}
		onClickTag={props.onClickTag}
		program={projProgram}
		selectedTags={props.selectedTags}
		skills={projSkills}
		tech={projTech}
	/>
);

export default FCCPortfolio;

export const fccPortfolio = {
	Component: FCCPortfolio,
	name,
	projProgram,
	projSkills,
	projTech
};
