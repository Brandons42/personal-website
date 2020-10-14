import React from 'react';

import Project from '../Project';
import skills from '../../skills';
import tech from '../../tech';

const { memRollDisplay } = require('../../../img-data');

const name = 'MemRoll';
const projSkills = [skills.mobile];
const projTech = [tech.reactNative, tech.javaScript];

const MemRoll = props => (
	<Project
		{...props}
		desc={
			<p>
				MemRoll allows you to take a journey to the past, while also testing
				your knowledge of your own past. Go through photos from your camera roll
				and guess how old they are.
			</p>
		}
		href='https://apps.apple.com/us/app/memroll/id1459782811'
		imgs={[memRollDisplay]}
		name={name}
		skills={projSkills}
		tech={projTech}
	/>
);

export default MemRoll;

export const memRoll = {
	Component: MemRoll,
	name,
	projSkills,
	projTech
};
