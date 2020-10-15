import React from 'react';

import Project from '../Project';
import programs from '../../programs';
import skills from '../../skills';
import tech from '../../tech';

const { grassAnimation: grassAnimationIMG } = require('../../../img-data');

const name = 'Grass Animationzzzzzzz';
const projProgram = programs.cssi;
const projSkills = [skills.frontEnd];
const projTech = [tech.p5, tech.javaScript];

const GrassAnimation = props => (
	<Project
		{...props}
		code='https://glitch.com/edit/#!/hot-enchanted-trouser'
		desc={
			<p>
				This is the first project that I made for Udacity's Deep Reinforcement
				Learning Nanodegree, in which I trained an agent to navigate a world to
				collect yellow but not blue bananas in an efficient manner.
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
