[**dummy-typescript-api**](README.md)

***

[dummy-typescript-api](README.md) / utilities

# utilities

This module contains generic utility functions useful for various operations.

Utilities include formatting currencies, manipulating strings, generating identifiers, and validating inputs.

## Functions

### formatCurrency()

```ts
function formatCurrency(amount, currencyCode): string;
```

Defined in: [utilities.ts:17](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/utilities.ts#L17)

Formats a number as currency with a given currency code.
Utilizes the Intl.NumberFormat API to handle locale-specific currency formatting.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `amount` | `number` | The numeric value to be formatted. |
| `currencyCode` | `string` | The ISO currency code (e.g., USD, EUR) to specify the currency. |

#### Returns

`string`

The formatted currency string in the format "$1,234.56".

***

### generateUniqueId()

```ts
function generateUniqueId(): string;
```

Defined in: [utilities.ts:41](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/utilities.ts#L41)

Converts a string to title case, making the first character of each word uppercase.
Effective for formatting titles or names in a readable format.

#### Returns

`string`

The string transformed to title case.

***

### isValidEmail()

```ts
function isValidEmail(email): boolean;
```

Defined in: [utilities.ts:65](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/utilities.ts#L65)

Function to check if a value is a valid email address.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `email` | `string` | The email address to be validated. |

#### Returns

`boolean`

True if the email address is valid, false otherwise.

***

### shuffleArray()

```ts
function shuffleArray<T>(array): T[];
```

Defined in: [utilities.ts:75](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/utilities.ts#L75)

Function to shuffle an array.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `array` | `T`[] | The array to be shuffled. |

#### Returns

`T`[]

The shuffled array.

***

### toTitleCase()

```ts
function toTitleCase(input): string;
```

Defined in: [utilities.ts:29](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/utilities.ts#L29)

Function to convert a string to title case.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The input string. |

#### Returns

`string`

The input string in title case.

***

### truncateString()

```ts
function truncateString(input, maxLength): string;
```

Defined in: [utilities.ts:53](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/utilities.ts#L53)

Function to truncate a string to a specified length.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | `string` | The input string. |
| `maxLength` | `number` | The maximum length of the truncated string. |

#### Returns

`string`

The truncated string.
