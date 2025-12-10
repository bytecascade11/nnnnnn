import type { SiteConfig } from "@/types";
import type { AstroExpressiveCodeOptions } from "astro-expressive-code";

export const siteConfig: SiteConfig = {
	author: "iSamuel",
	title: "ReviByte Opinions",
	description:
		"ReviByte delivers the latest tech news, gadget opinions, Android updates, and in-depth guides to keep you informed and ahead in the digital world.",
	lang: "en",
	ogLocale: "en_US",
	date: {
		locale: "en",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	url: "https://revibyte.blog/",
};

// FIXED: Top navigation now points to real tag pages
export const menuLinks: { path: string; title: string }[] = [
	{ path: "/", title: "HOME" },
	{ path: "/tags/news", title: "NEWS" },
	{ path: "/tags/samsung", title: "SAMSUNG" },
	{ path: "/tags/apple", title: "APPLE" },
	{ path: "/tags/ai", title: "AI" },
	{ path: "/tags/android", title: "ANDROID" },
	{ path: "/tags/games", title: "GAMES" },
	{ path: "/tags/opinions", title: "OPINIONS" },
];

// Footer links (also fixed to match your real pages)
export const footerLinks: { path: string; title: string }[] = [
	{ path: "/about", title: "About the Editor" },
	{ path: "/contact", title: "Contact Us" },
	{ path: "/privacy", title: "Privacy Policy" },
	{ path: "/terms", title: "Terms & Conditions" },
	{ path: "/disclaimer", title: "Disclaimer" },
];

// Code block styling – unchanged
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	styleOverrides: {
		borderRadius: "4px",
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		codeFontSize: "0.875rem",
		codeLineHeight: "1.7142857rem",
		codePaddingInline: "1rem",
		frames: { frameBoxShadowCssValue: "none" },
		uiLineHeight: "inherit",
	},
	themeCssSelector(theme, { styleVariants }) {
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme;
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme;
			if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`;
		}
		return `[data-theme="${theme.name}"]`;
	},
	themes: ["dracula", "github-light"],
	useThemedScrollbars: false,
};
