import React from 'react';

import Project from '../Project';
import programs from '../../programs';
import skills from '../../skills';
import tech from '../../tech';

const { tributePage: tributePageIMG } = require('../../../img-data');

const name = 'Tribute Pagezzzzzzzzzz';
const projProgram = programs.freeCodeCamp;
const projSkills = [skills.frontEnd];
const projTech = [tech.html, tech.css, tech.parcel];

const TributePage = props => (
	<Project
		{...props}
		code='https://github.com/Brandons42/ronald-bagby-tribute-page'
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
		href='https://brandons42.github.io/ronald-bagby-tribute-page/'
		imgs={[tributePageIMG]}
		name={name}
		program={projProgram}
		skills={projSkills}
		tech={projTech}
	/>
);

export default TributePage;

export const tributePage = {
	Component: TributePage,
	name,
	projProgram,
	projSkills,
	projTech
};
