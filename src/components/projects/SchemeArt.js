import React from 'react';

import Project from '../Project';
import programs from '../../programs';
import skills from '../../skills';
import tech from '../../tech';

const { schemeArt: schemeArtIMG } = require('../../../img-data');

const name = 'Scheme Artzzzzzzzzzz';
const projProgram = programs.cs61a;
const projSkills = [skills.algorithm];
const projTech = [tech.scheme];

const SchemeArt = props => (
	<Project
		{...props}
		code='https://inst.eecs.berkeley.edu/~cs61a/su20/proj/scheme_gallery/entries/d533fed8/contest.scm'
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
		href='https://inst.eecs.berkeley.edu/~cs61a/su20/proj/scheme_gallery/#death-star-explosion-chain'
		imgs={[schemeArtIMG]}
		name={name}
		program={projProgram}
		skills={projSkills}
		tech={projTech}
	/>
);

export default SchemeArt;

export const schemeArt = {
	Component: SchemeArt,
	name,
	projProgram,
	projSkills,
	projTech
};
