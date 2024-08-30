import { printers as prettierPrinters } from 'prettier/plugins/html';
/** @import {Printer} from 'prettier' */

export { languages, options, parsers } from 'prettier/plugins/html';

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
