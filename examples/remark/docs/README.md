# Remark Example

## Table of Contents

* [Install](#install)
* [Overview](#overview)
* [Functions](#functions)
  * [addNumbers()](#addnumbers)
  * [greetUser()](#greetuser)

## Install

```
npm i typedoc-plugin-remark remark-insert-headings remark-github remark-toc --save-dev
```

## Overview

In this example we are using remark plugins to:

* Automatically link to github items ([#1](https://github.com/typedoc2md/typedoc-plugin-markdown/issues/1)) using [remark-github](https://github.com/remarkjs/remark-github).
* Auto generate a TOC using [remark-toc](https://github.com/remarkjs/remark-toc).

See https://www.typedoc-plugin-markdown.org/plugins/remark for docs.

## Functions

### addNumbers()

> **addNumbers**(`a`, `b`): `number`

Defined in: [index.ts:5](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/examples/remark/src/index.ts#L5)

#### Parameters

##### a

`number`

##### b

`number`

#### Returns

`number`

***

### greetUser()

> **greetUser**(`name`): `string`

Defined in: [index.ts:1](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/examples/remark/src/index.ts#L1)

#### Parameters

##### name

`string`

#### Returns

`string`
