import React from 'react';

import Project from '../Project';
import skills from '../../skills';
import tech from '../../tech';
import { wordSprint } from './WordSprint';

const {
	wordSprintLandingPage: wordSprintLandingPageIMG
} = require('../../../img-data');

const name = 'Word Sprint Landing Pagezzzzzzzzzz';
const projSkills = [skills.frontEnd];
const projTech = [tech.html, tech.css, tech.javaScript, tech.gulp];

const WordSprintLandingPage = props => (
	<Project
		{...props}
		code='https://github.com/Brandons42/word-sprint'
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
