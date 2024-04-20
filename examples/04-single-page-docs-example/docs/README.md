**typedoc-plugin-markdown-examples** • API

***

# typedoc-plugin-markdown-examples

This module contains generic utility functions useful for various operations.

Utilities include formatting currencies, manipulating strings, generating identifiers, and validating inputs.

## Functions

### formatCurrency()

```ts
function formatCurrency(amount, currencyCode): string
```

Formats a number as currency with a given currency code.
Utilizes the Intl.NumberFormat API to handle locale-specific currency formatting.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | The numeric value to be formatted. |
| `currencyCode` | `string` | The ISO currency code (e.g., USD, EUR) to specify the currency. |

#### Returns

`string`

The formatted currency string in the format "$1,234.56".

#### Source

utilities.ts:17

***

### generateUniqueId()

```ts
function generateUniqueId(): string
```

Converts a string to title case, making the first character of each word uppercase.
Effective for formatting titles or names in a readable format.

#### Returns

`string`

The string transformed to title case.

#### Source

utilities.ts:41

***

### isValidEmail()

```ts
function isValidEmail(email): boolean
```

Function to check if a value is a valid email address.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `email` | `string` | The email address to be validated. |

#### Returns

`boolean`

True if the email address is valid, false otherwise.

#### Source

utilities.ts:65

***

### shuffleArray()

```ts
function shuffleArray<T>(array): T[]
```

Function to shuffle an array.

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | The array to be shuffled. |

#### Returns

`T`[]

The shuffled array.

#### Source

utilities.ts:75

***

### toTitleCase()

```ts
function toTitleCase(input): string
```

Function to convert a string to title case.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | The input string. |

#### Returns

`string`

The input string in title case.

#### Source

utilities.ts:29

***

### truncateString()

```ts
function truncateString(input, maxLength): string
```

Function to truncate a string to a specified length.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | The input string. |
| `maxLength` | `number` | The maximum length of the truncated string. |

#### Returns

`string`

The truncated string.

#### Source

utilities.ts:53
