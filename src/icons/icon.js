import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './css/micon_nb.css';

const icon_codes = require("./icons.json");

export default class Icon extends Component {
	static propTypes = {
		type: PropTypes.string
	}

	render() {
		const {
			icon,
			size,
		} = this.props;

		const icon_size = size || 16;

		return (
			<div className={styles.icon} style={{ fontSize: icon_size }}>{String.fromCharCode(parseInt(icon_codes[icon], 16))}</div>
		)
	}
}