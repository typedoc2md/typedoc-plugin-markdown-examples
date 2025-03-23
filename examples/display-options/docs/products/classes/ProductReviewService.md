[**dummy-typescript-api**](../../README.md)

***

[dummy-typescript-api](../../README.md) / [products](../README.md) / ProductReviewService

# Class: ProductReviewService

Defined in: [products.ts:151](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L151)

Service for managing product reviews.

## Constructors

### Constructor

```ts
new ProductReviewService(): ProductReviewService
```

#### Returns

`ProductReviewService`

## Methods

### addProductReview()

```ts
addProductReview(review): ProductReview
```

Defined in: [products.ts:159](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L159)

Add a new product review.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `review` | [`ProductReview`](../interfaces/ProductReview.md) | The product review to be added. |

#### Returns

[`ProductReview`](../interfaces/ProductReview.md)

The added product review.

***

### getAverageRating()

```ts
getAverageRating(productId): number
```

Defined in: [products.ts:178](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L178)

Get the average rating for a specific product.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `productId` | `string` | The ID of the product. |

#### Returns

`number`

The average rating for the specified product.

***

### getProductReviews()

```ts
getProductReviews(productId): ProductReview[]
```

Defined in: [products.ts:169](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L169)

Get all product reviews for a specific product.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `productId` | `string` | The ID of the product. |

#### Returns

[`ProductReview`](../interfaces/ProductReview.md)[]

An array of product reviews for the specified product.
