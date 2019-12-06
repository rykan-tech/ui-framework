import * as React from 'react';

import styles from './rwf.css';

import ThemeContext from '../../theme/ThemeContext';

export default class Navbar extends React.Component<{logo?: string, style?: React.CSSProperties, outerStyle?: React.CSSProperties, logoStyle?: React.CSSProperties, fixed?: boolean}> {
	render() {
		const {
			children,
			logo,
			style,
			outerStyle,
			logoStyle,
		} = this.props;

		return (
			<ThemeContext.Consumer>
				{(theme) => {
					return (
						<div className={styles.navbar} style={outerStyle}>
							<div className={styles["navbar-inner"]} style={{ background: theme.altHigh, ...style }}>
								<img className={styles.rykan} alt="Logo" style={logoStyle} src={logo} />
								{children}
							</div>
						</div>
					)
				}}
			</ThemeContext.Consumer>
		)
	}
}