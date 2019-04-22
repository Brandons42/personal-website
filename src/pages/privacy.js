import React from 'react';

import Layout from '../components/Layout';
import styles from '../styles/privacy.module.scss';

const Privacy = () => (
	<Layout title='Privacy Policy'>
		<div className={styles.container}>
			<h2>Privacy Policy</h2>
			<p>
				The privacy policy below is effective as of April 21, 2019 and applies
				to the personal website of Brandon Suen.
			</p>
			<br />
			<br />
			<p>
				This website automatically collects information to improve the site and
				keep track of usage statistics. This website makes use of a third party
				service to collect this information: Google Analytics. Google Analytics
				collects information using cookies. Cookies are data websites can store
				on your device. Information includes how long you accessed the website
				for, how you interacted with the website, what brought you to the
				website, where you accessed the website from, and the type of software
				you used to access the website. You should review information about
				Google Analytics for more information.
			</p>
			<br />
			<br />
			<p>
				Changes to this policy may occur. The date on which the latest changes
				to this policy were put into effect can be seen at the top of the
				policy.
			</p>
		</div>
	</Layout>
);

export default Privacy;
