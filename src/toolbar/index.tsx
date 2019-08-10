import * as React from 'react';

import styles from './r_toolbar.css';

const Toolbar: React.FunctionComponent<{ children: any }> = (props) => {
	return (
		<div className={styles.toolbar}>{props.children}</div>
	)
}

export default Toolbar;