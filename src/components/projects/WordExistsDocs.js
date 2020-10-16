import React from 'react';

import Project from '../Project';
import programs from '../../programs';
import skills from '../../skills';
import tech from '../../tech';
import { wordExists } from './WordExists';

const { wordExistsDocs: wordExistsDocsIMG } = require('../../../img-data');

const name = 'Word Exists Documentation';
const projProgram = programs.freeCodeCamp;
const projSkills = [skills.frontEnd];
const projTech = [tech.html, tech.css, tech.javaScript, tech.parcel];

const WordExistsDocs = props => (
	<Project
		{...props}
		code='https://github.com/Brandons42/word-exists-documentation'
		desc={
			<p>
				Documentation web page for the Word Exists NPM package, built for the{' '}
				<a
					href='https://www.freecodecamp.org'
					rel='noopener noreferrer'
					target='_blank'
				>
					freeCodeCamp
				</a>{' '}
				curriculum.
			</p>
		}
		href='https://brandons42.github.io/word-exists-documentation/'
		imgs={[wordExistsDocsIMG]}
		name={name}
		program={projProgram}
		related={[wordExists.name]}
		skills={projSkills}
		tech={projTech}
	/>
);

export default WordExistsDocs;

export const wordExistsDocs = {
	Component: WordExistsDocs,
	name,
	projProgram,
	projSkills,
	projTech
};
