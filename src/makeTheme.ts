import { Color } from 'csstype';

// @ts-ignore
import pSBC from './pSBC';

interface ThemeProps {
	accent: Color,
	theme: string
}

const makeTheme = function (theme: ThemeProps) {
	function hexToRGB(hex: Color | null, alpha?: number | null) {
		if (!hex) {
			return null;
		}
		var r = parseInt(hex.slice(1, 3), 16),
			g = parseInt(hex.slice(3, 5), 16),
			b = parseInt(hex.slice(5, 7), 16);
	
		if (alpha) {
			return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
		} else {
			return "rgb(" + r + ", " + g + ", " + b + ")";
		}
	}

	if (theme.theme === "light") {
		return {
			accent: theme.accent,
			background: {
				//gradient3d6: "linear-gradient(to bottom, rgba(125,126,125,0.6) 0%,rgba(14,14,14,0.6) 100%)",
				//gradient3d8: "linear-gradient(to bottom, rgba(125,126,125,0.8) 0%,rgba(14,14,14,0.8) 100%)",
				//gradientDark: "linear-gradient(to bottom, rgba(125,126,125,1) 0%,rgba(14,14,14,1) 100%)",
				metal: "linear-gradient(to bottom, rgba(238,238,238,1) 0%,rgba(204,204,204,1) 100%)",
				alt_metal: "linear-gradient(to bottom, rgba(69,72,77,1) 0%,rgba(43,43,43,1) 100%)",
				high: "#FFFFFF",
				mid: "#FAFAFA",
				low: "#E7E7E7",
			},
			theme: "light",
			// Accents
			accentLow: hexToRGB(theme.accent, 0.4),
			accentMedium: hexToRGB(theme.accent, 0.6),
			accentHigh: hexToRGB(theme.accent, 0.7),

			accentDark: hexToRGB(pSBC(-0.10, theme.accent)),
			accentDarker: hexToRGB(pSBC(-0.20, theme.accent)),
			accentDarkest: hexToRGB(pSBC(-0.30, theme.accent)),

			accentLight: hexToRGB(pSBC(0.10, theme.accent)),
			accentLighter: hexToRGB(pSBC(0.20, theme.accent)),
			accentLightest: hexToRGB(pSBC(0.30, theme.accent)),

			chromeLow: "#171717",
			chromeMediumLow: "#2B2B2B",
			chromeMedium: "#1F1F1F",
			chromeHigh: "#767676",

			baseLow: "rgba(0, 0, 0, 0.2)",
			baseMediumLow: "rgba(0, 0, 0, 0.4)",
			baseMedium: "rgba(0, 0, 0, 0.6)",
			baseMediumHigh: "rgba(0, 0, 0, 0.8)",
			baseHigh: "rgba(0, 0, 0, 0.95)",

			altLow: "rgba(255, 255, 255, 0.2)",
			altMediumLow: "rgba(255, 255, 255, 0.4)",
			altMedium: "rgba(255, 255, 255, 0.6)",
			altMediumHigh: "rgba(255, 255, 255, 0.8)",
			altHigh: "rgba(255, 255, 255, 0.95)",

			transition: {
				300: "300ms cubic-bezier(0.785, 0.135, 0.150, 0.860)",
				100: "100ms cubic-bezier(0.785, 0.135, 0.150, 0.860)"
			},

			shadow: "0 3px 15px 0px rgba(0, 0, 0, 0.4), 0 -3px 15px 0px rgba(0, 0, 0, 0.4)"
		}
	} else {
		return {
			accent: theme.accent,
			background: {
				//gradient3d6: "linear-gradient(to bottom, rgba(125,126,125,0.6) 0%,rgba(14,14,14,0.6) 100%)",
				//gradient3d8: "linear-gradient(to bottom, rgba(125,126,125,0.8) 0%,rgba(14,14,14,0.8) 100%)",
				//gradientDark: "linear-gradient(to bottom, rgba(125,126,125,1) 0%,rgba(14,14,14,1) 100%)",
				alt_metal: "linear-gradient(to bottom, rgba(238,238,238,1) 0%,rgba(204,204,204,1) 100%)",
				metal: "linear-gradient(to bottom, rgba(69,72,77,1) 0%,rgba(43,43,43,1) 100%)",
				high: "#171717",
				mid: "#1F1F1F",
				low: "#2B2B2B",
			},
			theme: theme.theme || "dark",
			// Accents
			accentLow: hexToRGB(theme.accent, 0.4),
			accentMedium: hexToRGB(theme.accent, 0.6),
			accentHigh: hexToRGB(theme.accent, 0.7),

			accentDark: hexToRGB(pSBC(-0.10, theme.accent)),
			accentDarker: hexToRGB(pSBC(-0.20, theme.accent)),
			accentDarkest: hexToRGB(pSBC(-0.30, theme.accent)),

			accentLight: hexToRGB(pSBC(0.10, theme.accent)),
			accentLighter: hexToRGB(pSBC(0.20, theme.accent)),
			accentLightest: hexToRGB(pSBC(0.30, theme.accent)),

			chromeLow: "#171717",
			chromeMediumLow: "#2B2B2B",
			chromeMedium: "#1F1F1F",
			chromeHigh: "#767676",

			baseLow: "rgba(255, 255, 255, 0.2)",
			baseMediumLow: "rgba(255, 255, 255, 0.4)",
			baseMedium: "rgba(255, 255, 255, 0.6)",
			baseMediumHigh: "rgba(255, 255, 255, 0.8)",
			baseHigh: "rgba(255, 255, 255, 0.95)",

			altLow: "rgba(0, 0, 0, 0.2)",
			altMediumLow: "rgba(0, 0, 0, 0.4)",
			altMedium: "rgba(0, 0, 0, 0.6)",
			altMediumHigh: "rgba(0, 0, 0, 0.8)",
			altHigh: "rgba(0, 0, 0, 0.95)",

			transition: {
				300: "300ms cubic-bezier(0.785, 0.135, 0.150, 0.860)",
				100: "100ms cubic-bezier(0.785, 0.135, 0.150, 0.860)"
			},

			shadow: "0 3px 15px 0px rgba(0, 0, 0, 0.4), 0 -3px 15px 0px rgba(0, 0, 0, 0.4)"
		};
	}
}

export {
	makeTheme
};

export default makeTheme;