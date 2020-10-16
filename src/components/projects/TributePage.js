import React from 'react';

import Project from '../Project';
import programs from '../../programs';
import skills from '../../skills';
import tech from '../../tech';

const { tributePage: tributePageIMG } = require('../../../img-data');

const name = 'Tribute Page';
const projProgram = programs.freeCodeCamp;
const projSkills = [skills.frontEnd];
const projTech = [tech.html, tech.css, tech.parcel];

const TributePage = props => (
	<Project
		{...props}
		code='https://github.com/Brandons42/ronald-bagby-tribute-page'
		desc={
			<p>
				This is a simple web page I created as a tribute to my grandfather as
				part of the freeCodeCamp curriculum.
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
