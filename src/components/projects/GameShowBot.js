import React from 'react';

import Project from '../Project';
import skills from '../../skills';
import tech from '../../tech';

const { gameShowBot: gameShowBotIMG } = require('../../../img-data');

const name = 'Game Show Botzzzzzzz';
const projSkills = [skills.botDevelopment];
const projTech = [tech.webSocket, tech.node, tech.javaScript];

const GameShowBot = props => (
	<Project
		{...props}
		desc={
			<p>
				This is the first project that I made for Udacity's Deep Reinforcement
				Learning Nanodegree, in which I trained an agent to navigate a world to
				collect yellow but not blue bananas in an efficient manner.
			</p>
		}
		imgs={[gameShowBotIMG]}
		name={name}
		skills={projSkills}
		tech={projTech}
	/>
);

export default GameShowBot;

export const gameShowBot = {
	Component: GameShowBot,
	name,
	projSkills,
	projTech
};
