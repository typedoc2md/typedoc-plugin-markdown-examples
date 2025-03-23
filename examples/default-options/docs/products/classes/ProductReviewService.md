[**Default Options Example**](../../README.md)

***

[Default Options Example](../../modules.md) / [products](../README.md) / ProductReviewService

# Class: ProductReviewService

Defined in: [products.ts:151](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L151)

Service for managing product reviews.

## Constructors

### Constructor

> **new ProductReviewService**(): `ProductReviewService`

#### Returns

`ProductReviewService`

## Methods

### addProductReview()

> **addProductReview**(`review`): [`ProductReview`](../interfaces/ProductReview.md)

Defined in: [products.ts:159](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L159)

Add a new product review.

#### Parameters

##### review

[`ProductReview`](../interfaces/ProductReview.md)

The product review to be added.

#### Returns

[`ProductReview`](../interfaces/ProductReview.md)

The added product review.

***

### getAverageRating()

> **getAverageRating**(`productId`): `number`

Defined in: [products.ts:178](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L178)

Get the average rating for a specific product.

#### Parameters

##### productId

`string`

The ID of the product.

#### Returns

`number`

The average rating for the specified product.

***

### getProductReviews()

> **getProductReviews**(`productId`): [`ProductReview`](../interfaces/ProductReview.md)[]

Defined in: [products.ts:169](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L169)

Get all product reviews for a specific product.

#### Parameters

##### productId

`string`

The ID of the product.

#### Returns

[`ProductReview`](../interfaces/ProductReview.md)[]

An array of product reviews for the specified product.
