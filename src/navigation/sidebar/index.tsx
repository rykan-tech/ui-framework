import * as React from 'react';

import styles from './r_sidebar.css';

export default class Sidebar extends React.Component<{ compact?: boolean, style?: React.CSSProperties, children?: any, className?: string, label?: string, hidden?: boolean }> {
	render() {
		const {
			children,
			compact,
			label,
			style,
			hidden,
		} = this.props;

		let width = 320;

		if (compact) width = 240;

		return (
			<div className={this.props.className ? styles.sidebar + " " + this.props.className : styles.sidebar} style={{ ...style, width: width }} role="navigation" aria-label={label || "Sidebar"} aria-hidden={hidden}>
				{children}
			</div>
		)
	}
}