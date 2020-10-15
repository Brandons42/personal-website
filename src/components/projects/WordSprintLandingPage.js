import React from 'react';

import Project from '../Project';
import skills from '../../skills';
import tech from '../../tech';
import { wordSprint } from './WordSprint';

const {
	wordSprintLandingPage: wordSprintLandingPageIMG
} = require('../../../img-data');

const name = 'Word Sprint Landing Page';
const projSkills = [skills.frontEnd];
const projTech = [tech.html, tech.css, tech.javaScript, tech.gulp];

const WordSprintLandingPage = props => (
	<Project
		{...props}
		code='https://github.com/Brandons42/word-sprint'
		desc={
			<p>
				This is the landing page I made for the Word Sprint iOS App that
				includes multiple video tutorials on how the game works.
			</p>
		}
		href='https://brandons42.github.io/word-sprint/'
		imgs={[wordSprintLandingPageIMG]}
		name={name}
		related={[wordSprint.name]}
		skills={projSkills}
		tech={projTech}
	/>
);

export default WordSprintLandingPage;

export const wordSprintLandingPage = {
	Component: WordSprintLandingPage,
	name,
	projSkills,
	projTech
};
