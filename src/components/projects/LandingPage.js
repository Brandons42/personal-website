import React from 'react';

import Project from '../Project';
import programs from '../../programs';
import skills from '../../skills';
import tech from '../../tech';

const { aif } = require('../../../img-data');

const name = 'AIF Landing Page';
const projProgram = programs.freeCodeCamp;
const projSkills = [skills.frontEnd];
const projTech = [tech.html, tech.css, tech.javaScript, tech.gulp];

const LandingPage = props => (
	<Project
		{...props}
		code='https://github.com/Brandons42/american-imperial-faction'
		desc={
			<p>
				The landing page for the American Imperial Faction, which is a
				make-believe political-party I created for a project in governement &
				politics class in high school. The landing page project is part of the
				freeCodeCamp curriculum.
			</p>
		}
		href='https://brandons42.github.io/american-imperial-faction/?fcc'
		imgs={[aif]}
		name={name}
		program={projProgram}
		skills={projSkills}
		tech={projTech}
	/>
);

export default LandingPage;

export const landingPage = {
	Component: LandingPage,
	name,
	projProgram,
	projSkills,
	projTech
};
