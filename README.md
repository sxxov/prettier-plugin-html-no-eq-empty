# `prettier-plugin-html-no-eq-empty`

Remove empty HTML attributes (those pesky `=""`s).

## Installation

```bash
npm i -D prettier-plugin-html-no-eq-empty
```

## Usage

Add the following to your `prettier.config.js`:

```js
export default {
	// add the plugin
	plugins: ['prettier-plugin-html-no-eq-empty'],
};
```

## Example

```html
<!-- Before -->
<div data-bruh=""></div>
```

```html
<!-- After -->
<div data-bruh></div>
```

## Excluded Attributes

Certain attributes are hard-coded to be excluded from being stripped:

* `alt`
* `src`
* `href`
* `url`
* `name`
* `class`
* `id`

If you want to add or remove attributes from this list, you can either [submit a PR](https://github.com/sxxov/prettier-plugin-html-no-eq-empty/pulls), or just copy & paste the plugin into your project (it's one file!).

```js
export default {
	// add the plugin
	plugins: ['./path/to/your/prettier-plugin-html-no-eq-empty.js'],
};
```

## License

MIT
