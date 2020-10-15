import React from 'react';

import Project from '../Project';
import programs from '../../programs';
import skills from '../../skills';
import tech from '../../tech';

const { airHockey: airHockeyIMG } = require('../../../img-data');

const name = 'Air Hockeyzzzzzzz';
const projProgram = programs.cssi;
const projSkills = [skills.frontEnd];
const projTech = [tech.p5, tech.javaScript];

const AirHockey = props => (
	<Project
		{...props}
		code='https://glitch.com/edit/#!/tin-daisy-bamboo'
		desc={
			<p>
				This is the first project that I made for Udacity's Deep Reinforcement
				Learning Nanodegree, in which I trained an agent to navigate a world to
				collect yellow but not blue bananas in an efficient manner.
			</p>
		}
		href='https://tin-daisy-bamboo.glitch.me/'
		imgs={[airHockeyIMG]}
		name={name}
		program={projProgram}
		skills={projSkills}
		tech={projTech}
	/>
);

export default AirHockey;

export const airHockey = {
	Component: AirHockey,
	name,
	projProgram,
	projSkills,
	projTech
};
