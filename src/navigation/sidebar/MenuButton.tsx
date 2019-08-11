import * as React from 'react';

import styles from './r_sidebar.css';

import { Icon } from 'office-ui-fabric-react';

import { Depths } from '@uifabric/fluent-theme';

const showHoverStyles: (e: React.MouseEvent<HTMLButtonElement>) => void = (e) => {
	e.currentTarget.classList.add(styles.menu_button_hover);
	e.currentTarget.style.boxShadow = Depths.depth16;
}

const hideHoverStyles: (e: React.MouseEvent<HTMLButtonElement>) => void = (e) => {
	e.currentTarget.classList.remove(styles.menu_button_hover);
	e.currentTarget.style.boxShadow = "";
}

const MenuButton: React.FunctionComponent<{ icon?: string, children: string, onClick?: React.MouseEventHandler }> = (props) => {
	return (
		<button onMouseOver={showHoverStyles} onMouseLeave={hideHoverStyles} style={{ boxShadow: "" }} onClick={props.onClick} className={styles.menu_button}><Icon className={styles.menu_button_icon} iconName={props.icon} /><label className={styles.menu_button_label}>{props.children}</label></button>
	)
}

export default MenuButton;