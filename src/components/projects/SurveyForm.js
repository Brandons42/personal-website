import React from 'react';

import Project from '../Project';
import programs from '../../programs';
import skills from '../../skills';
import tech from '../../tech';

const { survey } = require('../../../img-data');

const name = 'Survey Form';
const projProgram = programs.freeCodeCamp;
const projSkills = [skills.frontEnd];
const projTech = [tech.html, tech.css, tech.parcel];

const SurveyForm = props => (
	<Project
		{...props}
		code='https://github.com/Brandons42/car-survey-form'
		desc={
			<p>
				This is a simple HTML form I created as part of the freeCodeCamp
				curriculum.
			</p>
		}
		href='https://brandons42.github.io/car-survey-form/'
		imgs={[survey]}
		name={name}
		program={projProgram}
		skills={projSkills}
		tech={projTech}
	/>
);

export default SurveyForm;

export const surveyForm = {
	Component: SurveyForm,
	name,
	projProgram,
	projSkills,
	projTech
};
