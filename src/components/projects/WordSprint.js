import React from 'react';

import Project from '../Project';
import skills from '../../skills';
import tech from '../../tech';

const { quizWatchDisplay1, quizWatchDisplay2 } = require('../../../img-data');

const name = 'Word Sprintzzzzzzzzzz';
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
		cursor={props.cursor}
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
		href='https://apps.apple.com/us/app/word-sprint-rhymes-synonyms/id1502860378'
		imgs={[quizWatchDisplay1, quizWatchDisplay2]}
		name={name}
		onClickTag={props.onClickTag}
		selectedTags={props.selectedTags}
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
