import React from 'react';

import Project from '../Project';
import skills from '../../skills';
import tech from '../../tech';

const {
	geographistDisplay1,
	geographistDisplay2,
	geographistDisplay3
} = require('../../../img-data');

const name = 'Geographist';
const projSkills = [skills.mobile];
const projTech = [
	tech.reactNative,
	tech.react,
	tech.redux,
	tech.reactNavigation
];

const Geographist = props => (
	<Project
		cursor={props.cursor}
		desc={
			<p>
				Geographist is an app for geography lovers everywhere on the iOS App
				Store now. Traverse the world by discovering and exploring new cities.
				Learn about these new cities with a plethora of intriguing information,
				and then test your knowledge of the exact locations of these cities
				later!
			</p>
		}
		href='https://apps.apple.com/us/app/geographist/id1470035851'
		imgs={[geographistDisplay1, geographistDisplay2, geographistDisplay3]}
		name={name}
		onClickTag={props.onClickTag}
		selectedTags={props.selectedTags}
		skills={projSkills}
		tech={projTech}
	/>
);

export default Geographist;

export const geographist = {
	Component: Geographist,
	name,
	projSkills,
	projTech
};
