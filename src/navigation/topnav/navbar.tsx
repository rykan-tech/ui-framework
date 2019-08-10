import * as React from 'react';

import styles from './rwf.css';

export default class Navbar extends React.Component<{logo?: string, style?: React.StyleHTMLAttributes<HTMLDivElement>, outerStyle?: React.StyleHTMLAttributes<HTMLDivElement>, fixed?: boolean}> {
	render() {
		const {
			children,
			logo,
			style,
			outerStyle,
			//fixed,
		} = this.props;

		return (
			<div className={styles.navbar} style={outerStyle}>
				<div className={styles["navbar-inner"]} style={style}>
					<img className={styles.rykan} src={logo}/>
					{children}
				</div>
			</div>
		)
	}
}