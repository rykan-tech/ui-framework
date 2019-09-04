import * as React from 'react';

import styles from './styles.css';

import { Icon } from 'office-ui-fabric-react';
import { MotionTimings } from '@uifabric/fluent-theme';

import ThemeContext from '../ThemeContext';

const Button: React.FunctionComponent<{ icon?: string, children?: string, label?: string, onClick?: React.MouseEventHandler, style?: React.CSSProperties, transparent?: boolean }> = (props) => {
	if (!props.children && !props.label) {
		console.warn("Buttons without text should have a label for accessibility");
	}
	return (
		<ThemeContext.Consumer>
			{(theme) => {
				return (
					<button style={{ transitionTimingFunction: MotionTimings.standard, backgroundImage: props.transparent ? "none" : `linear-gradient(to right, ${theme.accentLighter} 50%, ${theme.accentDarkest} 100%)`, ...props.style }} onClick={props.onClick} className={styles.button} aria-label={props.label}>
						{props.icon ? <Icon className={styles.button_icon} iconName={props.icon} /> : null}
						{props.children ? <label className={styles.button_label}>{props.children}</label> : null}
					</button>
				)
			}}
		</ThemeContext.Consumer>
	)
}

export default Button;