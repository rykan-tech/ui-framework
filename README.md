# @rykan/ui-framework

>

[![NPM](https://img.shields.io/npm/v/@rykan/ui.svg)](https://www.npmjs.com/package/@rykan/ui-framework)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![CircleCI](https://circleci.com/gh/rykan-tech/ui-framework.svg?style=svg)](https://circleci.com/gh/rykan-tech/ui-framework)
[![Maintainability](https://api.codeclimate.com/v1/badges/0718174538bdb4e67387/maintainability)](https://codeclimate.com/github/rykan-tech/ui-framework/maintainability)

## Install

```bash
npm install --save @rykan/ui-framework
```

```bash
yarn add @rykan/ui-framework
```

## Usage

```tsx
import * as React from 'react'

import {
	Theme,
	makeTheme
} from '@rykan/ui-framework';

// ...

const theme = makeTheme({theme: "dark", accent: "#0078D7"});

// ...

class Example extends React.Component {
	render () {
		return (
			<Theme theme={theme}>
				// Stuff!
			</Theme>
		)
	}
}
```

## License

LGPLv3 © [iliketeaalot](https://github.com/iliketeaalot)
