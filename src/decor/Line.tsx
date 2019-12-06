import * as React from 'react';

import ThemeContext from '../theme/ThemeContext';

const Button: React.FunctionComponent<{ vertical?: boolean, horizontal?: boolean }> = (props) => {
	return (
		<ThemeContext.Consumer>
			{(theme) => {
				if (props.horizontal) {
					return (
						<div style={{ background: theme.baseMediumLow, height: 2, margin: "7px 32px" }} />
					);
				} else if (props.vertical) {
					return (
						<div style={{ background: theme.baseMediumLow, width: 2, margin: "8px 7px" }} />
					);
				} else {
					throw "Line (Component): Please specify direction!";
				}
			}}
		</ThemeContext.Consumer>
	)
}

export default Button;