**date-time-utils-pkg v3.0.0** • **Docs**

***

[packages-example](../README.md) / date-time-utils-pkg

# date-time-utils-pkg

**`Package Documentation`**

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

#### Defined in

[index.ts:14](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/b80b40c4b7617bc48cb05414e6c656078be63721/examples/05-packages-example/packages/date-time-utils/index.ts#L14)

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

#### Defined in

[index.ts:24](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/b80b40c4b7617bc48cb05414e6c656078be63721/examples/05-packages-example/packages/date-time-utils/index.ts#L24)
