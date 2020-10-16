import React from 'react';

import Project from '../Project';
import programs from '../../programs';
import skills from '../../skills';
import tech from '../../tech';

const { nBody1, nBody2, nBody3 } = require('../../../img-data');

const name = 'NBody Simulator';
const projProgram = programs.cs61b;
const projSkills = [skills.algorithm];
const projTech = [tech.java];

const NBodySimulator = props => (
	<Project
		{...props}
		desc={
			<p>
				This is my extra credit extension for the first project of UC Berkeley's
				CS 61B class in which we create a simulator that models gravitational
				pull between celestial bodies. For my extra credit extension, I allowed
				users to create new bodies with the click of a mouse. The new body
				starts with the initial velocity the cursor had when the body was
				created.
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
