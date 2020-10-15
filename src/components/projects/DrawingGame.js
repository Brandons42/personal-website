import React from 'react';

import Project from '../Project';
import programs from '../../programs';
import skills from '../../skills';
import tech from '../../tech';

const { drawingGame: drawingGameIMG } = require('../../../img-data');

const name = 'Drawing Game';
const projProgram = programs.cssi;
const projSkills = [skills.frontEnd];
const projTech = [tech.p5, tech.javaScript];

const DrawingGame = props => (
	<Project
		{...props}
		code='https://glitch.com/edit/#!/tangy-bouncy-week'
		desc={
			<p>
				This is a group project I helped make during Google's CSSI program. It's
				a game during which one person paints a picture on the canvas, after
				which the other player tries to guess what they've just drawn.
			</p>
		}
		href='https://tangy-bouncy-week.glitch.me/'
		imgs={[drawingGameIMG]}
		name={name}
		program={projProgram}
		skills={projSkills}
		tech={projTech}
	/>
);

export default DrawingGame;

export const drawingGame = {
	Component: DrawingGame,
	name,
	projProgram,
	projSkills,
	projTech
};
