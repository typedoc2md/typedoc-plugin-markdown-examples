[github-wiki-example](../wiki/Home) / [ProductsModule](../wiki/ProductsModule) / ProductReviewService

# Class: ProductReviewService

Service for managing product reviews.

## Constructors

### new ProductReviewService()

> **new ProductReviewService**(): [`ProductReviewService`](../wiki/ProductsModule.Class.ProductReviewService)

#### Returns

[`ProductReviewService`](../wiki/ProductsModule.Class.ProductReviewService)

## Properties

| Property | Modifier | Type | Default value |
| :------ | :------ | :------ | :------ |
| `reviews` | `private` | [`ProductReview`](../wiki/ProductsModule.Interface.ProductReview)[] | `[]` |

## Methods

### addProductReview()

> **addProductReview**(`review`): [`ProductReview`](../wiki/ProductsModule.Interface.ProductReview)

Add a new product review.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `review` | [`ProductReview`](../wiki/ProductsModule.Interface.ProductReview) | The product review to be added. |

#### Returns

[`ProductReview`](../wiki/ProductsModule.Interface.ProductReview)

The added product review.

#### Source

[products.ts:159](https://github.com/typedoc-plugin-markdown/typedoc-plugin-markdown-examples/blob/20d21e441b853b3f7b2de364c070522db75798b0/examples/src/products.ts#L159)

***

### getAverageRating()

> **getAverageRating**(`productId`): `number`

Get the average rating for a specific product.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `productId` | `string` | The ID of the product. |

#### Returns

`number`

The average rating for the specified product.

#### Source

[products.ts:178](https://github.com/typedoc-plugin-markdown/typedoc-plugin-markdown-examples/blob/20d21e441b853b3f7b2de364c070522db75798b0/examples/src/products.ts#L178)

***

### getProductReviews()

> **getProductReviews**(`productId`): [`ProductReview`](../wiki/ProductsModule.Interface.ProductReview)[]

Get all product reviews for a specific product.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `productId` | `string` | The ID of the product. |

#### Returns

[`ProductReview`](../wiki/ProductsModule.Interface.ProductReview)[]

An array of product reviews for the specified product.

#### Source

[products.ts:169](https://github.com/typedoc-plugin-markdown/typedoc-plugin-markdown-examples/blob/20d21e441b853b3f7b2de364c070522db75798b0/examples/src/products.ts#L169)
