**default-options-example** • [Readme](../../README.md) \| API

***

[default-options-example](../../modules.md) / [products](../README.md) / ProductReviewService

# Class: ProductReviewService

Service for managing product reviews.

## Contents

- [Constructors](ProductReviewService.md#constructors)
    - [new ProductReviewService](ProductReviewService.md#constructors)
- [Properties](ProductReviewService.md#properties)
    - [reviews](ProductReviewService.md#reviews)
- [Methods](ProductReviewService.md#methods)
    - [addProductReview](ProductReviewService.md#addproductreview)
    - [getAverageRating](ProductReviewService.md#getaveragerating)
    - [getProductReviews](ProductReviewService.md#getproductreviews)

## Constructors

### new ProductReviewService()

> **new ProductReviewService**(): [`ProductReviewService`](ProductReviewService.md)

#### Returns

[`ProductReviewService`](ProductReviewService.md)

## Properties

### reviews

> **`private`** **reviews**: [`ProductReview`](../interfaces/ProductReview.md)[] = `[]`

#### Source

products.ts:130

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

products.ts:137

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

products.ts:156

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

products.ts:147

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
