import React from 'react';

import Project from '../Project';
import programs from '../../programs';
import skills from '../../skills';
import tech from '../../tech';

const { calculator: calculatorImg } = require('../../../img-data');

const name = 'Calculator';
const projProgram = programs.freeCodeCamp;
const projSkills = [skills.frontEnd];
const projTech = [
	tech.react,
	tech.scss,
	tech.parcel,
	tech.babel,
	tech.javaScript,
	tech.html
];

const Calculator = props => (
	<Project
		code='https://github.com/Brandons42/calculator'
		cursor={props.cursor}
		desc={
			<p>
				Hosted on Github Pages, this is a simple calculator that obeys the order
				of operations built for the{' '}
				<a href='https://www.freecodecamp.org' target='_blank'>
					freeCodeCamp
				</a>{' '}
				curriculum.
			</p>
		}
		href='https://brandons42.github.io/calculator'
		imgs={[calculatorImg]}
		name={name}
		onClickProgram={props.onClickProgram}
		onClickTag={props.onClickTag}
		program={projProgram}
		programState={props.programState}
		selectedTags={props.selectedTags}
		skills={projSkills}
		tech={projTech}
	/>
);

export default Calculator;

export const calculator = {
	Component: Calculator,
	name,
	projProgram,
	projSkills,
	projTech
};
