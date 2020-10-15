import React from 'react';

import Project from '../Project';
import programs from '../../programs';
import skills from '../../skills';
import tech from '../../tech';

const { frogger: froggerIMG } = require('../../../img-data');

const name = 'Frogger';
const projProgram = programs.cssi;
const projSkills = [skills.frontEnd];
const projTech = [tech.p5, tech.javaScript];

const Frogger = props => (
	<Project
		{...props}
		code='https://glitch.com/edit/#!/flower-caramel-passionfruit'
		desc={
			<p>
				This is a project I made for Google's CSSI program in which the user
				must make it past all of the cars moving across the screen using the
				arrow keys.
			</p>
		}
		href='https://flower-caramel-passionfruit.glitch.me/'
		imgs={[froggerIMG]}
		name={name}
		program={projProgram}
		skills={projSkills}
		tech={projTech}
	/>
);

export default Frogger;

export const frogger = {
	Component: Frogger,
	name,
	projProgram,
	projSkills,
	projTech
};
