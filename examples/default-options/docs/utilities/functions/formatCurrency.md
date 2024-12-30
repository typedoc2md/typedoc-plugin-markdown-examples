[**Default Options Example**](../../README.md)

***

[Default Options Example](../../modules.md) / [utilities](../README.md) / formatCurrency

# Function: formatCurrency()

> **formatCurrency**(`amount`, `currencyCode`): `string`

Defined in: [utilities.ts:17](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/utilities.ts#L17)

Formats a number as currency with a given currency code.
Utilizes the Intl.NumberFormat API to handle locale-specific currency formatting.

## Parameters

### amount

`number`

The numeric value to be formatted.

### currencyCode

`string`

The ISO currency code (e.g., USD, EUR) to specify the currency.

## Returns

`string`

The formatted currency string in the format "$1,234.56".
