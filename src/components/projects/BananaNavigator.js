import React from 'react';

import Project from '../Project';
import programs from '../../programs';
import skills from '../../skills';
import tech from '../../tech';

const {
	bananaNavigator: bananaNavigatorIMG,
	bananaNavigatorGraph
} = require('../../../img-data');

const name = 'Banana Navigator';
const projProgram = programs.drlnd;
const projSkills = [skills.deepReinforcementLearning, skills.deepLearning];
const projTech = [tech.pytorch, tech.unityAgents, tech.python];

const BananaNavigator = props => (
	<Project
		code='https://github.com/Brandons42/banana_navigator'
		cursor={props.cursor}
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
		onClickTag={props.onClickTag}
		program={projProgram}
		selectedTags={props.selectedTags}
		skills={projSkills}
		tech={projTech}
	/>
);

export default BananaNavigator;

export const bananaNavigator = {
	Component: BananaNavigator,
	name,
	projProgram,
	projSkills,
	projTech
};
