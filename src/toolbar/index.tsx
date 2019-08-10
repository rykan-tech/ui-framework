import * as React from 'react';

import styles from './r_toolbar.css';

const Toolbar: React.FunctionComponent<{ children: any, style?: React.CSSProperties }> = (props) => {
	return (
		<div className={styles.toolbar} style={{ ...props.style }}>{props.children}</div>
	)
}

export default Toolbar;