import * as React from 'react';

import { styles as typeStyles } from '../typography/styles';

import styles from './rwf.css';

export default class Navbar extends React.Component<{onClick?: React.MouseEventHandler<HTMLDivElement>, id?: string, right?: boolean}> {
	render() {
		const {
			children,
			onClick,
			id,
			right,
		} = this.props;

		const floatRight = right ? { marginLeft: "auto" } : {};

		return (
			<div className={styles.navitem} id={id} style={{ ...floatRight}} onClick={onClick}>
				<span style={{ ...typeStyles.Base }}>{children}</span>
			</div>
		)
	}
}