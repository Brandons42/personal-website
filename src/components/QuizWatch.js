import React from 'react';

import Project from './Project';

const { quizWatchDisplay1, quizWatchDisplay2 } = require('../../img-data');

const QuizWatch = () => (
	<Project
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
		href='https://apps.apple.com/us/app/quiz-watch/id1454913754?ls=1'
		imgs={[quizWatchDisplay1, quizWatchDisplay2]}
		name='Quiz Watch'
		skills='React Native, Redux, React Navigation, JavaScript'
	/>
);

export default QuizWatch;
