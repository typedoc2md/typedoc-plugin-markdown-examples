**date-time-utils v3.0.0** • API

***

[packages-example](../README.md) / date-time-utils

# date-time-utils

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

index.ts:14

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

index.ts:24
