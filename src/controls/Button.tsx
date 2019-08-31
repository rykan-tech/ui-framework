import * as React from 'react';

import styles from './styles.css';

import { Icon } from 'office-ui-fabric-react';
import { MotionTimings } from '@uifabric/fluent-theme';

const Button: React.FunctionComponent<{ icon?: string, children: string, onClick?: React.MouseEventHandler, style?: React.CSSProperties }> = (props) => {
	return (
		<button style={{ transitionTimingFunction: MotionTimings.standard, ...props.style }} onClick={props.onClick} className={styles.button}>
			{props.icon ? <Icon className={styles.button_icon} iconName={props.icon} /> : null}
			<label className={styles.button_label}>{props.children}</label>
		</button>
	)
}

export default Button;