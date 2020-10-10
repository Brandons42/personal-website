import React from 'react';

import Project from '../Project';
import { quizWatch } from './QuizWatch';
import skills from '../../skills';
import tech from '../../tech';

const name = 'Quiz Watch Data Analysis';
const projSkills = [skills.frontEnd];
const projTech = [
	tech.d3,
	tech.html,
	tech.css,
	tech.gulp,
	tech.parcel,
	tech.javaScript
];

const QuizWatchDataAnalysis = props => (
	<Project
		code='https://github.com/Brandons42/quiz-watch-data'
		cursor={props.cursor}
		desc={
			<p>
				A data analysis project comparing the usage statistics from my Quiz
				Watch iOS App's usage to Quiz Bowl tournament frequency.
			</p>
		}
		href='https://brandons42.github.io/quiz-watch-data/'
		name={name}
		onClickTag={props.onClickTag}
		related={[quizWatch.name]}
		selectedTags={props.selectedTags}
		skills={projSkills}
		tech={projTech}
	/>
);

export default QuizWatchDataAnalysis;

export const quizWatchDataAnalysis = {
	Component: QuizWatchDataAnalysis,
	name,
	projSkills,
	projTech
};
