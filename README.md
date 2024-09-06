# Examples: typedoc-plugin-markdown

This repository contains examples of output generated using [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org).

## Index of Examples

The examples link directly to the typedoc generated output in this repository.
You can also browse the respective directories and view the configuration of each example.

### Core Output

| Example Link                                                         | Description                                                                 |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [Default Options](./examples/default-options/docs/README.md)         | Highlights how the plugin behaves with default settings.                    |
| [Display Options](./examples/display-options/docs/README.md)         | Demonstrates how to adjust the user experience with custom display options. |
| [Single Page Modules](./examples/single-page-modules/docs/README.md) | Shows how documentation can be generated with a single module per page.     |
| [Single Page Docs](./examples/single-page-docs/docs/README.md)       | Shows how docs can be generated to a single file with a single entry point. |
| [Packages](./examples/packages/docs/README.md)                       | Illustrates the output for the "packages" entrypoint strategy.              |
| [Localization](./examples/localization/docs/README.md)               | Shows how to localize the plugin output to different languages.             |
| [Customization](./examples/customization/docs/index.md)              | Demonstrates advanced customization using hooks and custom themes.          |

### Utils

| Example Link                                         | Description                                             |
| ---------------------------------------------------- | ------------------------------------------------------- |
| [Frontmatter](./examples/frontmatter/docs/README.md) | Showcases how frontmatter can be added to pages.        |
| [Remark](./examples/remark/docs/README.md)           | Showcases how output can be parsed with Remark plugins. |

## Running Examples Locally

If you would like to explore the examples and configure yourself clone the repository locally:

### 1. Clone Repository

```shell
git clone git@github.com:typedoc2md/typedoc-plugin-markdown-examples.git
cd typedoc-plugin-markdown-examples
git submodule update --init --recursive
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
npm run docs --workspace display-options
```
