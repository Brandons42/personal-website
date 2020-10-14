import React from 'react';

import Project from '../Project';
import programs from '../../programs';
import skills from '../../skills';
import tech from '../../tech';

const { survey } = require('../../../img-data');

const name = 'Survey Formzzzzzzzzzz';
const projProgram = programs.freeCodeCamp;
const projSkills = [skills.frontEnd];
const projTech = [tech.html, tech.css, tech.parcel];

const SurveyForm = props => (
	<Project
		{...props}
		code='https://github.com/Brandons42/car-survey-form'
		desc={
			<p>
				Quiz Watch, on the iOS App Store now, is the app you need to test and
				add to your knowledge. Using this app will enhance your Quiz Bowl or
				general trivia prowess, all while you're having a great time. You can
				keep track of your statistics and track your improvement. Furthermore,
				you can configure settings to get the questions at the right difficulty
				level and served at the right speed for you. You can even bookmark
				questions you're interested in reviewing later on.
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
