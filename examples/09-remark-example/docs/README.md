# remark-example

The comments in this block have been transformed by remark.

## Table of Contents

- [In Page Toc](#in-page-toc)
- [Github](#github)
- [Prettier](#prettier)
- [Variables](#variables)
  - [\_\_variable_with_underscores\_\_](#__variable_with_underscores__)

## In Page Toc

The [remark-toc](https://github.com/remarkjs/remark-toc) plugin has automatically turned page headers into an inline TOC.

Internally typedoc-plugin-remark has added the required toc heading before the first h2 in the document.

Therefore heading created by both code comments and TypeDoc generated headings will form part of the TOC.

## Github

Here we can automatically link to github items and users using [remark-github](https://github.com/remarkjs/remark-github).

Thanks [**@tgreyuk**](https://github.com/tgreyuk) please see issue [#1](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/1).

## Prettier

This page has been formatted using the [unified-prettier](https://www.npmjs.com/package/unified-prettier) plugin.

typedoc-plugin-markdown does produce well formatted code, however Prettier also:

- Removes unnecessary escape characters.
- Formats code blocks inside comment fenced blocks.

Here we have a badly formatted code blocks that prettier has formatted nicely.

```js
reallyUgly(javascript);
```

```css
.h1 {
  color: red;
}
```

## Variables

### \_\_variable_with_underscores\_\_

> `const` **\_\_variable_with_underscores\_\_**: `true` = `true`

In this function Prettier does removes unnecessary escape characters.

#### Source

[index.ts:45](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/38eb87a4b515962ebbfbbc47ab56d2442dce4b6d/examples/09-remark-example/src/index.ts#L45)
