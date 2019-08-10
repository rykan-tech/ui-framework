import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './headings.css';

class Heading extends Component {
	static propTypes = {
		children: PropTypes.any
	}

	render() {
		const {
			children,
			style
		} = this.props

		return (
			<h1 className={styles.heading} style={style}>{children}</h1>
		)
	}
}

class Subheading extends Component {
	static propTypes = {
		children: PropTypes.any
	}

	render() {
		const {
			children,
			style
		} = this.props

		return (
			<h2 className={styles.subheading} style={style}>{children}</h2>
		)
	}
}

class Title extends Component {
	static propTypes = {
		children: PropTypes.any
	}

	render() {
		const {
			children,
			style
		} = this.props

		return (
			<span role="heading" className={styles.title} style={style}>{children}</span>
		)
	}
}

class Subtitle extends Component {
	static propTypes = {
		children: PropTypes.any
	}

	render() {
		const {
			children,
			margin,
			style
		} = this.props

		return (
			<span className={styles.subtitle} style={style}>{children}</span>
		)
	}
}

class SubtitleAlt extends Component {
	static propTypes = {
		children: PropTypes.any
	}

	render() {
		const {
			children,
			style,
		} = this.props

		return (
			<span className={styles.subtitleAlt} style={style}>{children}</span>
		)
	}
}

class Base extends Component {
	static propTypes = {
		children: PropTypes.any
	}

	render() {
		const {
			children,
			style
		} = this.props

		return (
			<span className={styles.base} style={style}>{children}</span>
		)
	}
}

class P extends Component {
	static propTypes = {
		children: PropTypes.any
	}

	render() {
		const {
			children,
			margin
		} = this.props

		return(
			<p className={styles.paragraph}><Base>{children}</Base></p>
		)
	}
}

class Text extends Component {
	static propTypes = {
		children: PropTypes.any
	}

	render() {
		const {
			children,
			style,
		} = this.props

		return(
			<span className={styles.text} style={style}>{children}</span>
		)
	}
}

class Shadow extends Component {
	static propTypes = {
		children: PropTypes.any
	}

	render() {
		const {
			children,
			className,
			style,
		} = this.props

		return(
			<span className={`${styles.shadow} ${className}`} style={style}>{children}</span>
		)
	}
}

class Bold extends Component {
	static propTypes = {
		children: PropTypes.any
	}

	render() {
		const {
			children,
			style,
		} = this.props

		return(
			<span className={styles.bold} style={style}>{children}</span>
		)
	}
}

class Italic extends Component {
	static propTypes = {
		children: PropTypes.any
	}

	render() {
		const {
			children
		} = this.props

		return(
			<span className={styles.italic}>{children}</span>
		)
	}
}

class CaptionAlt extends Component {
	static propTypes = {
		children: PropTypes.any
	}
	
	render() {
		const {
			children
		} = this.props;

		return (
			<span className={styles.caption_alt}>{children}</span>
		)
	}
}

class Caption extends Component {
	static propTypes = {
		children: PropTypes.any
	}

	render() {
		const {
			children
		} = this.props;

		return (
			<span className={styles.caption}>{children}</span>
		)
	}
}

export { Heading, Subheading, Title, Subtitle, SubtitleAlt, Base, P, Text, Shadow, Bold, Italic, CaptionAlt, Caption };