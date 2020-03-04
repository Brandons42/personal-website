import React from 'react';
import ReCaptcha from 'react-google-recaptcha';

import pageStyles from '../styles/index.module.scss';
import styles from '../styles/contact.module.scss';

export default class Contact extends React.Component {
	state = {
		href: 'mailto:bqrwaznxdoqwnzsxueqwnzdxevqwezlxopqwezrx@qgwmzaxiqlw.zcxoqmw',
		loaded: false,
		show: false
	};

	_correct = () =>
		this.setState({ href: this.state.href.replace(/q|w|z|x/g, '') });

	_handleChange = value => this.setState({ show: !!value });

	_onLoad = () => this.setState({ loaded: true });

	render() {
		return (
			<div className={pageStyles.blue} id='contact'>
				<h2>Contact Me</h2>
				<div className={pageStyles.center}>
					{this.state.loaded || <p>ReCaptcha loading...</p>}
					<ReCaptcha
						asyncScriptOnLoad={this._onLoad}
						className={styles.captcha}
						onChange={this._handleChange}
						sitekey={process.env.GATSBY_CAPTCHA_SITE_KEY}
					/>
					{this.state.show && (
						<a
							className={styles.email}
							href={this.state.href}
							onFocus={this._correct}
							onMouseOver={this._correct}
						>
							Contact me via email here
					</a>
					)}
				</div>
			</div>
		);
	}
}