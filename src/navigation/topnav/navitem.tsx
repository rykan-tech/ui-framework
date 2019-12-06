import * as React from 'react';

import { styles as typeStyles } from '../../typography/styles';

import styles from './rwf.css';

import ThemeContext from '../../theme/ThemeContext';

const NavItem: React.FunctionComponent<{accent?: boolean, children?: any, link?: string, onClick?: React.MouseEventHandler<HTMLAnchorElement>, id?: string, right?: boolean, style?: React.CSSProperties}> = (props) => {
	const {
		accent,
		children,
		link,
		onClick,
		id,
		right,
	} = props;

	var style: React.CSSProperties = right ? { marginLeft: "auto" } : {};

	return (
		<ThemeContext.Consumer>
			{(theme) => {

				//var textStyle: React.CSSProperties = {};

				if (accent) {
					style.opacity = 1;
					style.backgroundImage = `linear-gradient(to right, ${theme.accentLighter} 50%, ${theme.accentDarkest} 100%)`;
				}

				return (
					<a href={link} style={{ ...style, ...props.style }}
						className={`${styles.navitem}${accent ? ` ${styles.navitem_accent}` : ""}`} id={id} onClick={onClick}>
						<span style={{ ...typeStyles.Bold, color: accent ? "" : "" }}>{children}</span>
					</a>
				)
			}}
		</ThemeContext.Consumer>
	)
}

export default NavItem;