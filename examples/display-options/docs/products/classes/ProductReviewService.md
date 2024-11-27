[**dummy-typescript-api**](../../README.md)

***

[Home](../../README.md) / [products](../README.md) / ProductReviewService

# Class: ProductReviewService

Service for managing product reviews.

## Constructors

### new ProductReviewService()

```ts
new ProductReviewService(): ProductReviewService
```

#### Returns

[`ProductReviewService`](ProductReviewService.md)

## Methods

### addProductReview()

```ts
addProductReview(review): ProductReview
```

Add a new product review.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `review` | [`ProductReview`](../interfaces/ProductReview.md) | The product review to be added. |

#### Returns

[`ProductReview`](../interfaces/ProductReview.md)

The added product review.

#### Defined in

[products.ts:159](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L159)

***

### getAverageRating()

```ts
getAverageRating(productId): number
```

Get the average rating for a specific product.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `productId` | `string` | The ID of the product. |

#### Returns

`number`

The average rating for the specified product.

#### Defined in

[products.ts:178](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L178)

***

### getProductReviews()

```ts
getProductReviews(productId): ProductReview[]
```

Get all product reviews for a specific product.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `productId` | `string` | The ID of the product. |

#### Returns

[`ProductReview`](../interfaces/ProductReview.md)[]

An array of product reviews for the specified product.

#### Defined in

[products.ts:169](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L169)
