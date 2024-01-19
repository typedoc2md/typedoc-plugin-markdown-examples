**default-options-example** • [Readme](../../README.md) \| [API](../../modules.md)

***

[default-options-example](../../README.md) / [products](../README.md) / ProductReviewService

# Class: ProductReviewService

Service for managing product reviews.

## Constructors

### new ProductReviewService()

> **new ProductReviewService**(): [`ProductReviewService`](ProductReviewService.md)

#### Returns

[`ProductReviewService`](ProductReviewService.md)

## Properties

### reviews

> **`private`** **reviews**: [`ProductReview`](../interfaces/ProductReview.md)[] = `[]`

#### Source

[products.ts:130](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/6bbf2a3/examples/01-typedoc-plugin-markdown/src/products.ts#L130)

## Methods

### addProductReview()

> **addProductReview**(`review`): [`ProductReview`](../interfaces/ProductReview.md)

Add a new product review.

#### Parameters

• **review**: [`ProductReview`](../interfaces/ProductReview.md)

The product review to be added.

#### Returns

[`ProductReview`](../interfaces/ProductReview.md)

The added product review.

#### Source

[products.ts:137](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/6bbf2a3/examples/01-typedoc-plugin-markdown/src/products.ts#L137)

***

### getAverageRating()

> **getAverageRating**(`productId`): `number`

Get the average rating for a specific product.

#### Parameters

• **productId**: `string`

The ID of the product.

#### Returns

`number`

The average rating for the specified product.

#### Source

[products.ts:156](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/6bbf2a3/examples/01-typedoc-plugin-markdown/src/products.ts#L156)

***

### getProductReviews()

> **getProductReviews**(`productId`): [`ProductReview`](../interfaces/ProductReview.md)[]

Get all product reviews for a specific product.

#### Parameters

• **productId**: `string`

The ID of the product.

#### Returns

[`ProductReview`](../interfaces/ProductReview.md)[]

An array of product reviews for the specified product.

#### Source

[products.ts:147](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/6bbf2a3/examples/01-typedoc-plugin-markdown/src/products.ts#L147)

***

Generated using [TypeDoc](https://typedoc.org) and [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org).
