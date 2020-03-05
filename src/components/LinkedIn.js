import React from 'react';
import makeAsyncScriptLoader from 'react-async-script';

const Badge = () => (
	<div class='LI-profile-badge' data-version='v1' data-size='medium' data-locale='en_US' data-type='vertical' data-theme='light' data-vanity='brandon-suen-8ba1b3187'><a class='LI-simple-link' href='https://www.linkedin.com/in/brandon-suen-8ba1b3187?trk=profile-badge'>Brandon Suen</a></div>
);

const LinkedIn = makeAsyncScriptLoader('https://platform.linkedin.com/badges/js/profile.js')(Badge);

export default LinkedIn;