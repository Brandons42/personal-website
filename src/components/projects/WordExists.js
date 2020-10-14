import React from 'react';

import Project from '../Project';
import { wordExistsDocs } from './WordExistsDocs';
import skills from '../../skills';
import tech from '../../tech';

const name = 'Word Exists';
const projSkills = [skills.npm];
const projTech = [tech.javaScript];

const WordExists = props => (
	<Project
		{...props}
		code='https://github.com/Brandons42/word-exists'
		desc={
			<p>
				An open source NPM package that checks if a word exists or not in
				English with no extra dependencies that works offline.
			</p>
		}
		href='https://www.npmjs.com/package/word-exists'
		name={name}
		related={[wordExistsDocs.name]}
		skills={projSkills}
		tech={projTech}
	/>
);

export default WordExists;

export const wordExists = {
	Component: WordExists,
	name,
	projSkills,
	projTech
};
