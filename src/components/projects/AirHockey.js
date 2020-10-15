import React from 'react';

import Project from '../Project';
import programs from '../../programs';
import skills from '../../skills';
import tech from '../../tech';

const { airHockey: airHockeyIMG } = require('../../../img-data');

const name = 'Air Hockey';
const projProgram = programs.cssi;
const projSkills = [skills.frontEnd];
const projTech = [tech.p5, tech.javaScript];

const AirHockey = props => (
	<Project
		{...props}
		code='https://glitch.com/edit/#!/tin-daisy-bamboo'
		desc={
			<p>
				This is the final project of the Google CSSI project that I made with my
				partner and presented on the final day. It's a simple air hockey
				web-game that can be played between two players locally using the
				w-a-s-d keys and arrow keys.
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
