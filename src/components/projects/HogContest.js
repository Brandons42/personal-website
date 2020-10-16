import React from 'react';

import Project from '../Project';
import programs from '../../programs';
import skills from '../../skills';
import tech from '../../tech';

const name = 'Hog Contest Algorithm';
const projProgram = programs.cs61a;
const projSkills = [skills.algorithm, skills.machineLearning];
const projTech = [tech.python, tech.xgboost, tech.pandas];

const HogContest = props => (
	<Project
		{...props}
		desc={
			<p>
				My submission for UC Berkeley CS 61A's contest to create the best
				algorithm to play a dice-rolling game against other students'
				algorithms.
			</p>
		}
		href='https://hog-contest.cs61a.org/old_results/su20/'
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
