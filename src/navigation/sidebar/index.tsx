import * as React from 'react';

import styles from './r_sidebar.css';

export default class Sidebar extends React.Component<{compact?: boolean, style?: React.CSSProperties, children?: any}> {
	render() {
		const {
			children,
			compact,
			style,
		} = this.props;

		let width = 320;

		if (compact) width = 240;

		return (
			<div className={styles.sidebar} style={{ ...style, width: width }}>
				{children}
			</div>
		)
	}
}