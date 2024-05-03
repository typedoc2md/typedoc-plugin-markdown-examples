[github-wiki-example](../wiki/Home) / [UtilitiesModule](../wiki/UtilitiesModule) / formatCurrency

# Function: formatCurrency()

> **formatCurrency**(`amount`, `currencyCode`): `string`

Formats a number as currency with a given currency code.
Utilizes the Intl.NumberFormat API to handle locale-specific currency formatting.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | The numeric value to be formatted. |
| `currencyCode` | `string` | The ISO currency code (e.g., USD, EUR) to specify the currency. |

## Returns

`string`

The formatted currency string in the format "$1,234.56".

## Source

[utilities.ts:17](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/e63f907fc136a040020fb1d12b594c3baad2ce3b/examples/src/utilities.ts#L17)
