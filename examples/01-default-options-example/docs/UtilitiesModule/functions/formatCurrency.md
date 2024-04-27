**typedoc-plugin-markdown-examples** • [Readme](../../README.md) \| [API](../../modules.md)

***

[typedoc-plugin-markdown-examples](../../README.md) / [UtilitiesModule](../README.md) / formatCurrency

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

[utilities.ts:17](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d2a811c92870a7c2dc8ea4f9aacd73d076444ff1/examples/src/utilities.ts#L17)
