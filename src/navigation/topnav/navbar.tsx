import * as React from 'react';

import styles from './rwf.css';

import ThemeContext from '../../theme/ThemeContext';

export default class Navbar extends React.Component<{ logo?: string, style?: React.CSSProperties, outerStyle?: React.CSSProperties, logoStyle?: React.CSSProperties, fixed?: boolean, onClickToggle?: React.MouseEventHandler }> {
	render() {
		const {
			children,
			logo,
			style,
			outerStyle,
			logoStyle,
			onClickToggle,
		} = this.props;

		return (
			<ThemeContext.Consumer>
				{(theme) => {
					return (
						<div className={styles.navbar} style={outerStyle}>
							<div className={styles["navbar-inner"]} style={{ background: theme.altHigh, ...style }}>
								<div className={styles.toggle} onClick={onClickToggle}>
									<span style={{ display: "inline-flex", margin: "auto", fontFamily: "monospace" }}>&#9776;</span>
								</div>
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