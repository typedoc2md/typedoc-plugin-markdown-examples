[packages-example](../README.md) / date-time-utils-pkg

# date-time-utils-pkg

This package provides utility functions for handling dates and times without external libraries,
including formatting dates, calculating differences between dates, and checking for weekend days.

## Functions

### daysBetweenDates()

> **daysBetweenDates**(`startDate`, `endDate`): `number`

Defined in: [index.ts:14](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/examples/packages/packages/date-time-utils/index.ts#L14)

Calculates the number of days between two dates.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `startDate` | `Date` | The start date. |
| `endDate` | `Date` | The end date. |

#### Returns

`number`

The number of days between the two dates.

***

### isDateWeekend()

> **isDateWeekend**(`date`): `boolean`

Defined in: [index.ts:24](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/examples/packages/packages/date-time-utils/index.ts#L24)

Checks if a given date is a weekend.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | `Date` | The date to check. |

#### Returns

`boolean`

True if the date is a weekend (Saturday or Sunday), false otherwise.
