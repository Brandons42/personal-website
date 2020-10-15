import React from 'react';

import Project from '../Project';
import skills from '../../skills';
import tech from '../../tech';
import { wordSprintLandingPage } from './WordSprintLandingPage';

const { wordSprintRhyme, wordSprintSprint } = require('../../../img-data');

const name = 'Word Sprint';
const projSkills = [skills.mobile];
const projTech = [
	tech.reactNative,
	tech.redux,
	tech.firebase,
	tech.reactNavigation,
	tech.javaScript
];

const WordSprint = props => (
	<Project
		{...props}
		desc={
			<p>
				Word Sprint, on the iOS App Store now, is a vibrant, fast-paced word
				game with three fun game modes. Each of the game modes are based around
				linking one word to another. These "links" are accomplished by inputting
				a word that is a synonym/related word, antonym, anagram, or rhyme of the
				target word.
			</p>
		}
		href='https://brandons42.github.io/word-sprint/'
		imgs={[wordSprintSprint, wordSprintRhyme]}
		name={name}
		related={[wordSprintLandingPage.name]}
		skills={projSkills}
		tech={projTech}
	/>
);

export default WordSprint;

export const wordSprint = {
	Component: WordSprint,
	name,
	projSkills,
	projTech
};
