import React from 'react';

import Project from '../Project';
import programs from '../../programs';
import skills from '../../skills';
import tech from '../../tech';

const {
	bananaNavigator: bananaNavigatorIMG,
	bananaNavigatorGraph
} = require('../../../img-data');

const name = 'Air Hockeyzzzzzzz';
const projProgram = programs.drlnd;
const projSkills = [skills.deepReinforcementLearning, skills.deepLearning];
const projTech = [tech.pytorch, tech.unityAgents, tech.python];

const AirHockey = props => (
	<Project
		{...props}
		code='https://github.com/Brandons42/banana_navigator'
		desc={
			<p>
				This is the first project that I made for Udacity's Deep Reinforcement
				Learning Nanodegree, in which I trained an agent to navigate a world to
				collect yellow but not blue bananas in an efficient manner.
			</p>
		}
		href='https://github.com/Brandons42/banana_navigator/blob/master/banana_navigator_report.pdf'
		imgs={[bananaNavigatorIMG, bananaNavigatorGraph]}
		name={name}
		program={projProgram}
		skills={projSkills}
		tech={projTech}
	/>
);

export default AirHockey;

export const airHockey = {
	Component: AirHockey,
	name,
	projProgram,
	projSkills,
	projTech
};
