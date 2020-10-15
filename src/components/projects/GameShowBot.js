import React from 'react';

import Project from '../Project';
import skills from '../../skills';
import tech from '../../tech';

const { gameShowBot: gameShowBotIMG } = require('../../../img-data');

const name = 'Game Show Bot';
const projSkills = [skills.botDevelopment];
const projTech = [tech.webSocket, tech.node, tech.javaScript];

const GameShowBot = props => (
	<Project
		{...props}
		desc={
			<p>
				This is a bot that solved answers for a live trivia game show app and
				automatically messaged answers to as the presenter for the game show
				asked the questions. It did this by connecting to the game's WebSocket
				stream to instantly access questions, and it solved the questions using
				algorithm including the Google Custom Search API and Wikipedia API.
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
