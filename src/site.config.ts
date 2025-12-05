import type { SiteConfig } from "@/types";
import type { AstroExpressiveCodeOptions } from "astro-expressive-code";

export const siteConfig: SiteConfig = {
	author: "iSamuel",
	title: "ReviByte Opinions",
	description:
		"ByteCascade delivers the latest tech news, gadget opinions, Android updates, and in-depth guides to keep you informed and ahead in the digital world.",
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
	url: "https://reviivyetechu.vercel.app/",
};

// TOP NAVIGATION ONLY – exactly what you want
export const menuLinks: { path: string; title: string }[] = [
	{ path: "/", title: "HOME" },
	{ path: "/category/news/", title: "NEWS" },
	{ path: "/category/samsung/", title: "SAMSUNG" },
	{ path: "/category/apple/", title: "APPLE" },
	{ path: "/category/ai/", title: "AI" },
	{ path: "/category/android/", title: "ANDROID" },
	{ path: "/category/games/", title: "GAMES" },
	{ path: "/category/opinions/", title: "OPINIONS" },
];

// FOOTER LINKS ONLY – these will be used after you apply the Footer.astro fix
export const footerLinks: { path: string; title: string }[] = [
	{ path: "/about-the-editor/", title: "About the Editor" },
	{ path: "/contact-us/", title: "Contact Us" },
	{ path: "/privacy-policy/", title: "Privacy Policy" },
	{ path: "/terms-conditions/", title: "Terms & Conditions" },
	{ path: "/disclaimer/", title: "Disclaimer" },
];

// Code block styling – leave exactly like this
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
