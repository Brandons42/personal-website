import React from 'react';
import makeAsyncScriptLoader from 'react-async-script';

const Badge = () => (
	<div
		className='badge-base LI-profile-badge'
		data-locale='en_US'
		data-size='medium'
		data-theme='light'
		data-type='VERTICAL'
		data-vanity='brandon-suen-8ba1b3187'
		data-version='v1'
		style={{ width: '250px' }}
	></div>
);

const LinkedIn = makeAsyncScriptLoader(
	'https://platform.linkedin.com/badges/js/profile.js',
	{ removeOnUnmount: true }
)(Badge);

export default LinkedIn;
