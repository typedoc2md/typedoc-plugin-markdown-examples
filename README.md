# Examples: typedoc-plugin-markdown

This repository contains examples of output generated using [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org).

## Index of Examples

The examples link directly to the typedoc generated output in this repository.
You can also browse the respective directories and view the configuration of each example.

### Core Examples

- [default-example](./examples/core/01-default/docs/README.md) - showcases the default output of the plugin.
- [customized-ux](./examples/core/02-customized-ux/docs/README.md) - showcases how the UX can be customized.
- [single-page-modules](./examples/core/03-single-page-modules/docs/README.md) - showcases output with single page modules.
- [packages](./examples/core/05-packages/docs/README.md) - showcases output for entrypointStrategy "packages".
- [localization](./examples/core/06-localization/docs/README.md) - showcases how output can be output in another language.
- [customization](./examples/core/07-customization/docs/index.md) - showcases how output can be customized with hooks and custom theme.

### Utils Examples

- [frontmatter](./examples/utils/frontmatter/docs/README.md) - showcases how frontmatter can be added to pages.
- [remark](./examples/utils/remark/docs/README.md) - showcases how output can be parsed with Remark plugins.

## Running Examples Locally

If you would like to explore the examples and configure yourself clone the repository locally:

### 1. Clone Repository

```shell
git clone git@github.com:typedoc2md/typedoc-plugin-markdown-examples.git
cd typedoc-plugin-markdown-examples
```

### 2. Install Dependencies

```shell
npm install
```

### 3. Build Examples

To run all examples:

```shell
npm run docs
```

To run a specific example:

```shell
npm run docs --workspace ux-options
```
