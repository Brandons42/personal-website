import React from 'react';

import Project from './Project';

const QuizWatch = () => (
	<Project
		code='https://github.com/Brandons42/calculator'
		desc={
			<p>
				Hosted on Github Pages, this is a simple calculator that obeys the order
				of operations built for the{' '}
				<a href='https://www.freecodecamp.org'>freeCodeCamp</a> curriculum.
			</p>
		}
		href='https://brandons42.github.io/calculator'
		name='Calculator'
		skills='React, SCSS, Parcel, Babel, JavaScript, HTML'
	/>
);

export default QuizWatch;
