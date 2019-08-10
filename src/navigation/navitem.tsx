import * as React from 'react';

import { styles as typeStyles } from '../typography/styles';

import styles from './rwf.css';

export default class NavItem extends React.Component<{children?: any, link?: string, onClick?: React.MouseEventHandler<HTMLAnchorElement>, id?: string, right?: boolean}> {
	render() {
		const {
			children,
			link,
			onClick,
			id,
			right,
		} = this.props;

		const floatRight = right ? { marginLeft: "auto" } : {};

		return (
			<a href={link} className={styles.navitem} id={id} style={floatRight} onClick={onClick}>
				<span style={{ ...typeStyles.Base }}>{children}</span>
			</a>
		)
	}
}