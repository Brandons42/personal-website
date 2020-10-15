import React from 'react';

import Project from '../Project';
import programs from '../../programs';
import skills from '../../skills';
import tech from '../../tech';

const { frogger: froggerIMG } = require('../../../img-data');

const name = 'Froggerzzzzzzz';
const projProgram = programs.cssi;
const projSkills = [skills.frontEnd];
const projTech = [tech.p5, tech.javaScript];

const Frogger = props => (
	<Project
		{...props}
		code='https://glitch.com/edit/#!/flower-caramel-passionfruit'
		desc={
			<p>
				This is the first project that I made for Udacity's Deep Reinforcement
				Learning Nanodegree, in which I trained an agent to navigate a world to
				collect yellow but not blue bananas in an efficient manner.
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
