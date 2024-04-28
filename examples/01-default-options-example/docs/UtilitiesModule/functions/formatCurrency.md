[typedoc-plugin-markdown-examples](../../README.md) • [Readme](../../README.md) \| Docs

***

[typedoc-plugin-markdown-examples](../../modules.md) / [UtilitiesModule](../README.md) / formatCurrency

# Function: formatCurrency()

> **formatCurrency**(`amount`, `currencyCode`): `string`

Formats a number as currency with a given currency code.
Utilizes the Intl.NumberFormat API to handle locale-specific currency formatting.

## Parameters

• **amount**: `number`

The numeric value to be formatted.

• **currencyCode**: `string`

The ISO currency code (e.g., USD, EUR) to specify the currency.

## Returns

`string`

The formatted currency string in the format "$1,234.56".

## Source

[utilities.ts:17](https://github.com/typedoc-plugin-markdown/typedoc-plugin-markdown-examples/blob/20d21e441b853b3f7b2de364c070522db75798b0/examples/src/utilities.ts#L17)
