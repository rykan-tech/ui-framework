import * as React from 'react';

import styles from './rwf.css';

import ThemeContext from '../../ThemeContext';

export default class Navbar extends React.Component<{logo?: string, style?: React.CSSProperties, outerStyle?: React.CSSProperties, fixed?: boolean}> {
	render() {
		const {
			children,
			logo,
			style,
			outerStyle,
		} = this.props;

		return (
			<ThemeContext.Consumer>
				{(theme) => {
					return (
						<div className={styles.navbar} style={outerStyle}>
							<div className={styles["navbar-inner"]} style={{ background: theme.altMediumHigh, ...style }}>
								<img className={styles.rykan} alt="Logo" src={logo} />
								{children}
							</div>
						</div>
					)
				}}
			</ThemeContext.Consumer>
		)
	}
}