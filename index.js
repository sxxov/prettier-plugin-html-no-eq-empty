import htmlPlugin from 'prettier/plugins/html';
/** @import {Printer, SupportLanguage} from 'prettier' */

const {
	printers: prettierPrinters,
	languages,
	options,
	parsers,
} = /**
 * @type {{
 * 	printers: { html: Printer };
 * 	languages: SupportLanguage[];
 * 	options: Record<string, unknown>;
 * } & typeof htmlPlugin}
 */ (htmlPlugin);

export { languages, options, parsers };

export const printers = Object.fromEntries(
	Object.entries(prettierPrinters).map(([key, printer]) => [
		key,
		/** @satisfies {Printer<any>} */ ({
			...printer,
			print(path, options, print) {
				const { node } = path;
				if (
					node.type === 'attribute' &&
					node.value === '' &&
					![
						'alt',
						'src',
						'href',
						'url',
						'name',
						'class',
						'id',
					].includes(node.rawName)
				)
					node.value = null;

				return printer.print(path, options, print);
			},
		}),
	]),
);
