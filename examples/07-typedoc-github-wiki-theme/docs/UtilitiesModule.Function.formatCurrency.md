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

[utilities.ts:17](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/f6ee18b4865e847a5ae81e3c3d7c2ce83ab384d7/examples/src/utilities.ts#L17)
