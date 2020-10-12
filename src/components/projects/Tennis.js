import React from 'react';

import Project from '../Project';
import programs from '../../programs';
import skills from '../../skills';
import tech from '../../tech';

const name = 'Tennis';
const projProgram = programs.drlnd;
const projSkills = [skills.deepReinforcementLearning, skills.deepLearning];
const projTech = [tech.pytorch, tech.unityAgents, tech.python];

const Tennis = props => (
	<Project
		code='https://github.com/Brandons42/tennis'
		cursor={props.cursor}
		desc={
			<p>
				This is the third project that I made for Udacity's Deep Reinforcement
				Learning Nanodegree, in which I trained two agents to rally together in
				tennis for as long as possible.
			</p>
		}
		href='https://github.com/Brandons42/tennis/blob/master/tennis_report.pdf'
		name={name}
		onClickTag={props.onClickTag}
		program={projProgram}
		selectedTags={props.selectedTags}
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
