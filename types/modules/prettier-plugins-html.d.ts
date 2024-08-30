declare module 'prettier/plugins/html' {
	import { type Printer, type SupportLanguage } from 'prettier';

	export * from 'prettier/parser-html';
	export const printers: {
		html: Printer;
	};
	export const languages: SupportLanguage[];
	export const options: Record<string, unknown>;
}
