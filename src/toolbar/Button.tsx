import * as React from 'react';

import menuStyles from '../navigation/sidebar/r_sidebar.css';

import styles from './r_toolbar.css';

import { Icon } from 'office-ui-fabric-react/lib/Icon';

const ToolbarButton: React.FunctionComponent<{ icon?: string, children: string, onClick: React.MouseEventHandler }> = (props) => {
	return (
		<button onClick={props.onClick} className={styles.button}><Icon className={menuStyles.menu_button_icon} iconName={props.icon} /><label className={menuStyles.menu_button_label}>{props.children}</label></button>
	)
}

export default ToolbarButton;