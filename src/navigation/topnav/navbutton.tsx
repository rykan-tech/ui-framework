import * as React from 'react';

import { styles as typeStyles } from '../../typography/styles';

import styles from './rwf.css';

import { Depths } from '@uifabric/fluent-theme';

const showHoverStyles: (e: React.MouseEvent<HTMLDivElement>) => void = (e) => {
	e.currentTarget.style.boxShadow = Depths.depth16;
}

const hideHoverStyles: (e: React.MouseEvent<HTMLDivElement>) => void = (e) => {
	e.currentTarget.style.boxShadow = "";
}

const showActiveStyles: (e: React.MouseEvent<HTMLDivElement>) => void = (e) => {
	e.currentTarget.style.boxShadow = "inset 0 0 2px 1px #000000";
}

const hideActiveStyles: (e: React.MouseEvent<HTMLDivElement>) => void = (e) => {
	e.currentTarget.style.boxShadow = "";
}

export default class NavButton extends React.Component<{onClick?: React.MouseEventHandler<HTMLDivElement>, id?: string, right?: boolean}> {
	render() {
		const {
			children,
			onClick,
			id,
			right,
		} = this.props;

		const floatRight = right ? { marginLeft: "auto" } : {};

		return (
			<div onClick={onClick}
				onMouseOver={showHoverStyles}
				onMouseLeave={hideHoverStyles}
				onMouseDown={showActiveStyles}
				onMouseUp={hideActiveStyles}
				className={styles.navitem} id={id}
				style={{ ...floatRight}}>
				<span style={{ ...typeStyles.Base }}>{children}</span>
			</div>
		)
	}
}