[github-wiki-example](../wiki/Home) / [products](../wiki/products) / ProductReviewService

# Class: ProductReviewService

Service for managing product reviews.

## Constructors

### new ProductReviewService()

> **new ProductReviewService**(): [`ProductReviewService`](../wiki/products.Class.ProductReviewService)

#### Returns

[`ProductReviewService`](../wiki/products.Class.ProductReviewService)

## Methods

### addProductReview()

> **addProductReview**(`review`): [`ProductReview`](../wiki/products.Interface.ProductReview)

Add a new product review.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `review` | [`ProductReview`](../wiki/products.Interface.ProductReview) | The product review to be added. |

#### Returns

[`ProductReview`](../wiki/products.Interface.ProductReview)

The added product review.

#### Defined in

[products.ts:159](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L159)

***

### getAverageRating()

> **getAverageRating**(`productId`): `number`

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

> **getProductReviews**(`productId`): [`ProductReview`](../wiki/products.Interface.ProductReview)[]

Get all product reviews for a specific product.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `productId` | `string` | The ID of the product. |

#### Returns

[`ProductReview`](../wiki/products.Interface.ProductReview)[]

An array of product reviews for the specified product.

#### Defined in

[products.ts:169](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L169)
