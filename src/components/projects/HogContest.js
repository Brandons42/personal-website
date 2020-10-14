import React from 'react';

import Project from '../Project';
import programs from '../../programs';
import skills from '../../skills';
import tech from '../../tech';

const { googleHomepage } = require('../../../img-data');

const name = 'Hog Contest Algorithmzzzzzzzzzzzzzzzzzzz';
const projProgram = programs.cs61a;
const projSkills = [skills.algorithm, skills.machineLearning];
const projTech = [tech.python, tech.xgboost, tech.pandas];

const HogContest = props => (
	<Project
		{...props}
		code='https://github.com/Brandons42/google-homepage'
		desc={
			<p>
				Hosted on Github Pages, this is a recreation of Google's homepage(in
				2017) built for{' '}
				<a href='https://www.theodinproject.com/'>The Odin Project's</a>{' '}
				curriculum.
			</p>
		}
		href='https://brandons42.github.io/google-homepage'
		imgs={[googleHomepage]}
		name={name}
		program={projProgram}
		skills={projSkills}
		tech={projTech}
	/>
);

export default HogContest;

export const hogContest = {
	Component: HogContest,
	name,
	projProgram,
	projSkills,
	projTech
};
