/**
 * @class ExampleComponent
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

import { makeTheme, Theme } from "./themes";

//const ThemeContext = React.createContext(makeTheme({accent: "#0078D8", theme: "dark"}));

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