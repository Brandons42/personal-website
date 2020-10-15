import React from 'react';

import Project from '../Project';
import programs from '../../programs';
import skills from '../../skills';
import tech from '../../tech';

const { nBody1, nBody2, nBody3 } = require('../../../img-data');

const name = 'NBody Simulatorzzzzzzz';
const projProgram = programs.cs61b;
const projSkills = [skills.algorithm];
const projTech = [tech.java];

const NBodySimulator = props => (
	<Project
		{...props}
		desc={
			<p>
				This is the first project that I made for Udacity's Deep Reinforcement
				Learning Nanodegree, in which I trained an agent to navigate a world to
				collect yellow but not blue bananas in an efficient manner.
			</p>
		}
		href='https://youtu.be/JjM3SmOq7F0'
		imgs={[nBody1, nBody2, nBody3]}
		name={name}
		program={projProgram}
		skills={projSkills}
		tech={projTech}
	/>
);

export default NBodySimulator;

export const nBodySimulator = {
	Component: NBodySimulator,
	name,
	projProgram,
	projSkills,
	projTech
};
