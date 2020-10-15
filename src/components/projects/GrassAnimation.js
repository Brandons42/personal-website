import React from 'react';

import Project from '../Project';
import programs from '../../programs';
import skills from '../../skills';
import tech from '../../tech';

const { grassAnimation: grassAnimationIMG } = require('../../../img-data');

const name = 'Grass Animation';
const projProgram = programs.cssi;
const projSkills = [skills.frontEnd];
const projTech = [tech.p5, tech.javaScript];

const GrassAnimation = props => (
	<Project
		{...props}
		code='https://glitch.com/edit/#!/hot-enchanted-trouser'
		desc={
			<p>
				This is a project I made for the Google CSSI program that involved
				randomly generating many grass blades and rain drops and making the
				grass slowly grow as the raindrops fell.
			</p>
		}
		href='https://hot-enchanted-trouser.glitch.me/'
		imgs={[grassAnimationIMG]}
		name={name}
		program={projProgram}
		skills={projSkills}
		tech={projTech}
	/>
);

export default GrassAnimation;

export const grassAnimation = {
	Component: GrassAnimation,
	name,
	projProgram,
	projSkills,
	projTech
};
