import React from 'react';

import Project from '../Project';
import programs from '../../programs';
import skills from '../../skills';
import tech from '../../tech';

const { schemeArt: schemeArtIMG } = require('../../../img-data');

const name = 'Scheme Art';
const projProgram = programs.cs61a;
const projSkills = [skills.algorithm];
const projTech = [tech.scheme];

const SchemeArt = props => (
	<Project
		{...props}
		code='https://inst.eecs.berkeley.edu/~cs61a/su20/proj/scheme_gallery/entries/d533fed8/contest.scm'
		desc={
			<p>
				This is my submission for UC Berkeley CS 61A's contest in which you're
				challenged to create recursive art with a limited amount of code to work
				with. The language it's programmed in, Scheme, is similar to Lisp. The
				art I created is a chain of Death Stars beaming each other.
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
