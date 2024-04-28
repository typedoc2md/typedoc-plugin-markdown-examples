date-time-utils-pkg v3.0.0 • Docs

***

[packages-example](../README.md) / date-time-utils-pkg

# date-time-utils-pkg

This package provides utility functions for handling dates and times without external libraries,
including formatting dates, calculating differences between dates, and checking for weekend days.

## Functions

### daysBetweenDates()

> **daysBetweenDates**(`startDate`, `endDate`): `number`

Calculates the number of days between two dates.

#### Parameters

• **startDate**: `Date`

The start date.

• **endDate**: `Date`

The end date.

#### Returns

`number`

The number of days between the two dates.

#### Source

[index.ts:14](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/f6ee18b4865e847a5ae81e3c3d7c2ce83ab384d7/examples/05-packages-example/packages/date-time-utils/index.ts#L14)

***

### isDateWeekend()

> **isDateWeekend**(`date`): `boolean`

Checks if a given date is a weekend.

#### Parameters

• **date**: `Date`

The date to check.

#### Returns

`boolean`

True if the date is a weekend (Saturday or Sunday), false otherwise.

#### Source

[index.ts:24](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/f6ee18b4865e847a5ae81e3c3d7c2ce83ab384d7/examples/05-packages-example/packages/date-time-utils/index.ts#L24)
