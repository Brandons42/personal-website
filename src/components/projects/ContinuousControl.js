import React from 'react';

import Project from '../Project';
import programs from '../../programs';
import skills from '../../skills';
import tech from '../../tech';

const {
	continuousControl: continuousControlIMG,
	continuousControlGraph
} = require('../../../img-data');

const name = 'Continuous Control';
const projProgram = programs.drlnd;
const projSkills = [skills.deepReinforcementLearning, skills.deepLearning];
const projTech = [tech.pytorch, tech.unityAgents, tech.python];

const ContinuousControl = props => (
	<Project
		code='https://github.com/Brandons42/continuous_control'
		cursor={props.cursor}
		desc={
			<p>
				This is the second project that I made for Udacity's Deep Reinforcement
				Learning Nanodegree, in which I trained 20 arms to reach for target
				locations.
			</p>
		}
		href='https://github.com/Brandons42/continuous_control/blob/master/continuous_control_report.pdf'
		imgs={[continuousControlIMG, continuousControlGraph]}
		name={name}
		onClickTag={props.onClickTag}
		program={projProgram}
		selectedTags={props.selectedTags}
		skills={projSkills}
		tech={projTech}
	/>
);

export default ContinuousControl;

export const continuousControl = {
	Component: ContinuousControl,
	name,
	projProgram,
	projSkills,
	projTech
};
