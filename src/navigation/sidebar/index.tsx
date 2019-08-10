import * as React from 'react';

import styles from './rwf_sidebar.css';

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
			<div className={styles.sidebar} id="file_menu" style={{ ...style, width: width }}>
				{children}
			</div>
		)
	}
}