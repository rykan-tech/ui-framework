/**
 * @class Theme
 */

import * as React from 'react';

import styles from './rwf.css';

import { initializeIcons } from '@uifabric/icons';

import Navbar from './navigation/topnav/navbar';
import NavItem from './navigation/topnav/navitem';
import NavButton from './navigation/topnav/navbutton';

export {
	Navbar,
	NavItem,
	NavButton,
};

import { styles as typography } from './typography/styles';

export {
	typography
};

import Sidebar from './navigation/sidebar';
import MenuButton from './navigation/sidebar/MenuButton';

export {
	Sidebar,
	MenuButton,
};

import Toolbar from './toolbar';
import ToolbarButton from './toolbar/Button';

export {
	Toolbar,
	ToolbarButton,
};

import makeTheme from './makeTheme';

//const ThemeContext = React.createContext(makeTheme({accent: "#0078D8", theme: "dark"}));

class Theme extends React.Component<{children?: any, className?: string, id?: string, theme: any, style?: React.CSSProperties }> {
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
			<ThemeContext.Provider value={makeTheme(theme)}>
				{/* <Parallax contentClassName={`${styles[`theme-${theme.theme || "dark"}`]} rwf-theme-root ${styles.theme}`} //style={{ backgroundImage: backgroundImg }} styleOuter={{ backgroundImage: backgroundImg }}
					bgImage={background}
					strength={1000}
					//offsetYMax={100}
					//offsetYMin={-100}
					//slowerScrollRate
					>
					{children}
				</Parallax> */}
				<div className={`${styles[`theme-${theme.theme}`]} rwf-theme-root ${styles.theme} ${className ? ` ${className}` : ""}`} id={id} style={style || { background: theme.background.high }}>
					{children}
				</div>
			</ThemeContext.Provider>
		)
	}
}

export {
	Theme,
	makeTheme,
};

import {
	colours,
	colours_array,
	colors,
	colors_array
} from './colours';

export {
	colours,
	colours_array,
	colors,
	colors_array
};

initializeIcons();