import * as React from 'react';

import styles from './r_sidebar.css';

import { Icon } from 'office-ui-fabric-react';

const MenuButton: React.FunctionComponent<{ icon?: string, data?: { url: string } | undefined, children: string, onClick?: React.MouseEventHandler, style?: React.CSSProperties }> = (props) => {
	return (
		<button onClick={props.onClick} className={styles.menu_button} style={props.style} data-url={props.data ? props.data.url : null} {...props.data}>
			<Icon className={styles.menu_button_icon} iconName={props.icon} />
			<label className={styles.menu_button_label}>{props.children}</label>
		</button>
	)
}

export default MenuButton;