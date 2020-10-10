import React from 'react';

import Project from '../Project';
import { wordExists } from './WordExists';
import skills from '../../skills';
import tech from '../../tech';
const { wordExistsDocs: wordExistsDocsIMG } = require('../../../img-data');

const name = 'Word Exists Documentation';
const projSkills = [skills.frontEnd];
const projTech = [tech.html, tech.css, tech.javaScript, tech.parcel];

const WordExistsDocs = props => (
	<Project
		code='https://github.com/Brandons42/word-exists-documentation'
		cursor={props.cursor}
		desc={
			<p>
				Documentation web page for the Word Exists NPM package, built for the{' '}
				<a href='https://www.freecodecamp.org'>freeCodeCamp</a> curriculum.
			</p>
		}
		href='https://brandons42.github.io/word-exists-documentation/'
		imgs={[wordExistsDocsIMG]}
		name={name}
		onClickTag={props.onClickTag}
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
	projSkills,
	projTech
};
