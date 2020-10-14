import React from 'react';

import Project from '../Project';
import programs from '../../programs';
import skills from '../../skills';
import tech from '../../tech';

const { tennis: tennisIMG, tennisGraph } = require('../../../img-data');

const name = 'Tennis';
const projProgram = programs.drlnd;
const projSkills = [skills.deepReinforcementLearning, skills.deepLearning];
const projTech = [tech.pytorch, tech.unityAgents, tech.python];

const Tennis = props => (
	<Project
		{...props}
		code='https://github.com/Brandons42/tennis'
		desc={
			<p>
				This is the third project that I made for Udacity's Deep Reinforcement
				Learning Nanodegree, in which I trained two agents to rally together in
				tennis for as long as possible.
			</p>
		}
		href='https://github.com/Brandons42/tennis/blob/master/tennis_report.pdf'
		imgs={[tennisIMG, tennisGraph]}
		name={name}
		program={projProgram}
		skills={projSkills}
		tech={projTech}
	/>
);

export default Tennis;

export const tennis = {
	Component: Tennis,
	name,
	projProgram,
	projSkills,
	projTech
};
