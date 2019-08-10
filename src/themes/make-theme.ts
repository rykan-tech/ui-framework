import { Color } from "csstype";

/**
 * Contains the alien code to make a theme
 */

interface ThemeProps {
	accent: Color;
	theme: string;
}

function hexToRGB(hex: Color | null, alpha?: number | null): string {
	if (!hex) {
		return null;
	}
	let red = parseInt(hex.slice(1, 3), 16),
		green = parseInt(hex.slice(3, 5), 16),
		blue = parseInt(hex.slice(5, 7), 16);

	if (alpha) {
		return "rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")";
	} else {
		return "rgb(" + red + ", " + green + ", " + blue + ")";
	}
}

export default function makeTheme(theme: ThemeProps) {

	/**
	 * Darkens and lightens accent colours,
	 * or blends with anopther
	 * From https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors/13542669#13542669
	 * @param p The amount to darken (-ve) or lighten the colour
	 * @param c0 The accent colour
	 * @param c1 A colour to blend with
	 * @param l 
	 */
	const pSBC = (p: number, c0: Color, c1?: Color, l?: any) => {
		let r, g, b, a, P, f, t, h, i = parseInt, m = Math.round, z = typeof (c1) == "string";
		if (typeof (p) != "number" || p < -1 || p > 1 || typeof (c0) != "string" || (c0[0] != 'r' && c0[0] != '#') || (c1 && !z)) return null;
		const pSBCr = (d: any) => {
			let n = d.length, x = {};
			if (n > 9) {
				[r, g, b, a] = d = d.split(","), n = d.length;
				if (n < 3 || n > 4) return null;
				/// @ts-ignore
				x.r = i(r[3] == "a" ? r.slice(5) : r.slice(4)), x.g = i(g), x.b = i(b), x.a = a ? parseFloat(a) : -1
			} else {
				if (n == 8 || n == 6 || n < 4) return null;
				if (n < 6) d = "#" + d[1] + d[1] + d[2] + d[2] + d[3] + d[3] + (n > 4 ? d[4] + d[4] : "");
				d = i(d.slice(1), 16);
				/// @ts-ignore
				if (n == 9 || n == 5) x.r = d >> 24 & 255, x.g = d >> 16 & 255, x.b = d >> 8 & 255, x.a = m((d & 255) / 0.255) / 1000;
				/// @ts-ignore
				else x.r = d >> 16, x.g = d >> 8 & 255, x.b = d & 255, x.a = -1
			} return x
		};
		/// @ts-ignore
		h = c0.length > 9, h = a ? c1.length > 9 ? true : c1 == "c" ? !h : false : h, f = pSBCr(c0), P = p < 0, t = c1 && c1 != "c" ? pSBCr(c1) : P ? { r: 0, g: 0, b: 0, a: -1 } : { r: 255, g: 255, b: 255, a: -1 }, p = P ? p * -1 : p, P = 1 - p;
		if (!f || !t) return null;
		/// @ts-ignore
		if (l) r = m(P * f.r + p * t.r), g = m(P * f.g + p * t.g), b = m(P * f.b + p * t.b);
		/// @ts-ignore
		else r = m((P * f.r ** 2 + p * t.r ** 2) ** 0.5), g = m((P * f.g ** 2 + p * t.g ** 2) ** 0.5), b = m((P * f.b ** 2 + p * t.b ** 2) ** 0.5);
		/// @ts-ignore
		a = f.a, t = t.a, f = a >= 0 || t >= 0, a = f ? a < 0 ? t : t < 0 ? a : a * P + t * p : 0;
		/// @ts-ignore
		if (h) return "rgb" + (f ? "a(" : "(") + r + "," + g + "," + b + (f ? "," + m(a * 1000) / 1000 : "") + ")";
		else return "#" + (4294967296 + r * 16777216 + g * 65536 + b * 256 + (f ? m(a * 255) : 0)).toString(16).slice(1, f ? undefined : -2)
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