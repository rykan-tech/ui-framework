/**
 * Contains theme component
 */
import makeTheme from "./make-theme";
import * as React from "react";
import styles from '../rwf.css';

export default class Theme extends React.Component<{ children?: any, className?: string, id?: string, theme: any, style?: React.CSSProperties }> {
	render() {
		const {
			children,
			className,
			id,
			theme,
			style,
		} = this.props

		const ThemeContext = React.createContext(makeTheme(theme));

		return (
			<ThemeContext.Provider value= { makeTheme(theme) } >
			{/* <Parallax contentClassName={`${styles[`theme-${theme.theme || "dark"}`]} rwf-theme-root ${styles.theme}`} //style={{ backgroundImage: backgroundImg }} styleOuter={{ backgroundImage: backgroundImg }}
					bgImage={background}
					strength={1000}
					//offsetYMax={100}
					//offsetYMin={-100}
					//slowerScrollRate
					>
					{children}
				</Parallax> */}
			<div className={`${styles[`theme-${theme.theme}`]} rwf-theme-root ${styles.theme}${className ? ` ${className}` : ""}`
			} id = { id } style = { style || { background: theme.background.high }}>
				{ children }
			</div>
		</ThemeContext.Provider>
		)
	}
}