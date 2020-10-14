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
		code='https://github.com/Brandons42/word-exists-documentation'
		cursor={props.cursor}
		desc={
			<p>
				Documentation web page for the Word Exists NPM package, built for the{' '}
				<a href='https://www.freecodecamp.org' target='_blank'>
					freeCodeCamp
				</a>{' '}
				curriculum.
			</p>
		}
		href='https://brandons42.github.io/word-exists-documentation/'
		imgs={[wordExistsDocsIMG]}
		name={name}
		onClickProgram={props.onClickProgram}
		onClickTag={props.onClickTag}
		program={projProgram}
		programState={props.programState}
		related={[wordExists.name]}
		selectedTags={props.selectedTags}
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
