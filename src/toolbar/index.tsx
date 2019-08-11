import * as React from 'react';

import styles from './r_toolbar.css';

import { Depths } from '@uifabric/fluent-theme';

const Toolbar: React.FunctionComponent<{ children: any, style?: React.CSSProperties }> = (props) => {
	return (
		<div className={styles.toolbar_container}>
			<div className={styles.toolbar} style={{ boxShadow: Depths.depth16, ...props.style }}>{props.children}</div>
		</div>
	)
}

export default Toolbar;