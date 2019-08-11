import * as React from 'react';

import { styles as typeStyles } from '../../typography/styles';

import styles from './rwf.css';

import { Depths } from '@uifabric/fluent-theme';

const showHoverStyles: (e: React.MouseEvent<HTMLAnchorElement>) => void = (e) => {
	e.currentTarget.style.boxShadow = Depths.depth16;
}

const hideHoverStyles: (e: React.MouseEvent<HTMLAnchorElement>) => void = (e) => {
	e.currentTarget.style.boxShadow = "";
}

const showActiveStyles: (e: React.MouseEvent<HTMLAnchorElement>) => void = (e) => {
	e.currentTarget.style.boxShadow = "inset 0 0 2px 1px #000000";
}

const hideActiveStyles: (e: React.MouseEvent<HTMLAnchorElement>) => void = (e) => {
	e.currentTarget.style.boxShadow = "";
}

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
			<a href={link}
				onMouseOver={showHoverStyles}
				onMouseLeave={hideHoverStyles}
				onMouseDown={showActiveStyles}
				onMouseUp={hideActiveStyles}
				style={{ boxShadow: "", ...floatRight }}
				className={styles.navitem} id={id} onClick={onClick}>
				<span style={{ ...typeStyles.Base }}>{children}</span>
			</a>
		)
	}
}