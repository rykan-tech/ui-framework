import * as React from 'react';

import styles from './styles.css';

import { Icon } from 'office-ui-fabric-react';
import { MotionTimings } from '@uifabric/fluent-theme';

import ThemeContext from '../ThemeContext';

const Button: React.FunctionComponent<{
	children?: string,
	icon?: string,
	label?: string,
	noShadow?: boolean,
	onClick?: React.MouseEventHandler,
	style?: React.CSSProperties,
	transparent?: boolean,
}> = (props) => {
	if (!props.children && !props.label) {
		console.warn("Buttons without text should have a label for accessibility");
	}
	return (
		<ThemeContext.Consumer>
			{(theme) => {
				return (
					<button style={{ transitionTimingFunction: MotionTimings.standard, color: theme.accent, backgroundImage: props.transparent ? "none" : `linear-gradient(120deg, ${theme.accentLight} 50%, ${theme.accentDarkest} 100%)`, border: props.transparent ? "2px solid " + theme.accentLight : "", ...props.style }} onClick={props.onClick} className={styles.button} aria-label={props.label}>
						{props.icon ? <Icon className={styles.button_icon} style={{ color: theme.baseHigh }} iconName={props.icon} /> : null}
						{props.children ? <label className={styles.button_label} style={{ color: theme.baseHigh }}>{props.children}</label> : null}
					</button>
				)
			}}
		</ThemeContext.Consumer>
	)
}

export default Button;