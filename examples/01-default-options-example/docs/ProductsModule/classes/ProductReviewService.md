**typedoc-plugin-markdown-examples** • [Readme](../../README.md) \| [API](../../modules.md)

***

[typedoc-plugin-markdown-examples](../../README.md) / [ProductsModule](../README.md) / ProductReviewService

# Class: ProductReviewService

Service for managing product reviews.

## Constructors

### new ProductReviewService()

> **new ProductReviewService**(): [`ProductReviewService`](ProductReviewService.md)

#### Returns

[`ProductReviewService`](ProductReviewService.md)

## Properties

### reviews

> `private` **reviews**: [`ProductReview`](../interfaces/ProductReview.md)[] = `[]`

#### Source

[products.ts:152](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d2a811c92870a7c2dc8ea4f9aacd73d076444ff1/examples/src/products.ts#L152)

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

[products.ts:159](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d2a811c92870a7c2dc8ea4f9aacd73d076444ff1/examples/src/products.ts#L159)

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

[products.ts:178](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d2a811c92870a7c2dc8ea4f9aacd73d076444ff1/examples/src/products.ts#L178)

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

[products.ts:169](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d2a811c92870a7c2dc8ea4f9aacd73d076444ff1/examples/src/products.ts#L169)
