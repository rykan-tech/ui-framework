import * as React from 'react';

import makeTheme from './makeTheme';
import { colours } from '../colours';

const ThemeContext = React.createContext(makeTheme({ accent: colours.default_blue, theme: "dark" }));

export default ThemeContext;