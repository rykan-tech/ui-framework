import * as React from 'react';

import menuStyles from '../navigation/sidebar/r_sidebar.css';

import styles from './r_toolbar.css';

import { Icon } from 'office-ui-fabric-react';

import { Depths } from '@uifabric/fluent-theme';

const showHoverStyles: (e: React.MouseEvent<HTMLButtonElement>) => void = (e) => {
	e.currentTarget.style.boxShadow = Depths.depth16;
}

const hideHoverStyles: (e: React.MouseEvent<HTMLButtonElement>) => void = (e) => {
	e.currentTarget.style.boxShadow = "";
}

const ToolbarButton: React.FunctionComponent<{ icon?: string, children: string, onClick?: React.MouseEventHandler }> = (props) => {
	return (
		<button onMouseOver={showHoverStyles} onMouseLeave={hideHoverStyles} style={{ boxShadow: "" }} onClick={props.onClick} className={styles.button}><Icon className={menuStyles.menu_button_icon} iconName={props.icon} /><label className={menuStyles.menu_button_label}>{props.children}</label></button>
	)
}

export default ToolbarButton;
