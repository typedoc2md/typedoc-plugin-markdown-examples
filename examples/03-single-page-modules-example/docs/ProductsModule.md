[typedoc-plugin-markdown-examples](README.md) • Docs

***

[Home](README.md) / ProductsModule

# ProductsModule

This module contains types and services related to product management.

## Enumerations

### ProductCategory

Enum representing different product categories.
Helps categorize products into logical groupings for easier management and browsing.

#### Enumeration Members

| Enumeration Member | Value | Description |
| :------ | :------ | :------ |
| `Books` | `"Books"` | Books category encompasses all genres and types of books, including novels, textbooks, and guides. |
| `Clothing` | `"Clothing"` | Clothing category includes apparel items such as shirts, pants, and dresses. |
| `Electronics` | `"Electronics"` | Electronics category includes items like computers, mobile phones, and other electronic devices. |
| `HomeDecor` | `"Home Decor"` | Home Decor category includes items used for decorating and furnishing a home, like furniture, paintings, and decor items. |

## Classes

### ProductInventory

Class representing a product inventory.

#### Constructors

##### new ProductInventory()

```ts
new ProductInventory(): ProductInventory
```

###### Returns

[`ProductInventory`](ProductsModule.md#productinventory)

#### Properties

| Property | Modifier | Type | Default value |
| :------ | :------ | :------ | :------ |
| `products` | `private` | [`ProductDetails`](ProductsModule.md#productdetails)[] | `[]` |

#### Methods

##### addProduct()

```ts
addProduct(product): ProductDetails
```

Add a new product to the inventory.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `product` | [`ProductDetails`](ProductsModule.md#productdetails) | The product to be added. |

###### Returns

[`ProductDetails`](ProductsModule.md#productdetails)

The added product details.

###### Source

[products.ts:68](https://github.com/typedoc-plugin-markdown/typedoc-plugin-markdown-examples/blob/20d21e441b853b3f7b2de364c070522db75798b0/examples/src/products.ts#L68)

##### getAllProducts()

```ts
getAllProducts(): ProductDetails[]
```

Get all products in the inventory.

###### Returns

[`ProductDetails`](ProductsModule.md#productdetails)[]

An array of all product details.

###### Source

[products.ts:77](https://github.com/typedoc-plugin-markdown/typedoc-plugin-markdown-examples/blob/20d21e441b853b3f7b2de364c070522db75798b0/examples/src/products.ts#L77)

##### getProductById()

```ts
getProductById(productId): undefined | ProductDetails
```

Get product details by ID.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `productId` | `string` | The ID of the product. |

###### Returns

`undefined` \| [`ProductDetails`](ProductsModule.md#productdetails)

The product details with the specified ID.

###### Source

[products.ts:86](https://github.com/typedoc-plugin-markdown/typedoc-plugin-markdown-examples/blob/20d21e441b853b3f7b2de364c070522db75798b0/examples/src/products.ts#L86)

##### getProductsByCategory()

```ts
getProductsByCategory(category): ProductDetails[]
```

Get products by category.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `category` | [`ProductCategory`](ProductsModule.md#productcategory) | The product category. |

###### Returns

[`ProductDetails`](ProductsModule.md#productdetails)[]

An array of product details in the specified category.

###### Source

[products.ts:95](https://github.com/typedoc-plugin-markdown/typedoc-plugin-markdown-examples/blob/20d21e441b853b3f7b2de364c070522db75798b0/examples/src/products.ts#L95)

##### removeProduct()

```ts
removeProduct(productId): undefined | ProductDetails
```

Remove a product from the inventory.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `productId` | `string` | The ID of the product to be removed. |

###### Returns

`undefined` \| [`ProductDetails`](ProductsModule.md#productdetails)

The removed product details.

###### Source

[products.ts:124](https://github.com/typedoc-plugin-markdown/typedoc-plugin-markdown-examples/blob/20d21e441b853b3f7b2de364c070522db75798b0/examples/src/products.ts#L124)

##### updateProductDetails()

```ts
updateProductDetails(productId, updatedDetails): undefined | ProductDetails
```

Update product details.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `productId` | `string` | The ID of the product to be updated. |
| `updatedDetails` | [`ProductDetails`](ProductsModule.md#productdetails) | The updated product details. |

###### Returns

`undefined` \| [`ProductDetails`](ProductsModule.md#productdetails)

The updated product details.

###### Source

[products.ts:105](https://github.com/typedoc-plugin-markdown/typedoc-plugin-markdown-examples/blob/20d21e441b853b3f7b2de364c070522db75798b0/examples/src/products.ts#L105)

***

### ProductReviewService

Service for managing product reviews.

#### Constructors

##### new ProductReviewService()

```ts
new ProductReviewService(): ProductReviewService
```

###### Returns

[`ProductReviewService`](ProductsModule.md#productreviewservice)

#### Properties

| Property | Modifier | Type | Default value |
| :------ | :------ | :------ | :------ |
| `reviews` | `private` | [`ProductReview`](ProductsModule.md#productreview)[] | `[]` |

#### Methods

##### addProductReview()

```ts
addProductReview(review): ProductReview
```

Add a new product review.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `review` | [`ProductReview`](ProductsModule.md#productreview) | The product review to be added. |

###### Returns

[`ProductReview`](ProductsModule.md#productreview)

The added product review.

###### Source

[products.ts:159](https://github.com/typedoc-plugin-markdown/typedoc-plugin-markdown-examples/blob/20d21e441b853b3f7b2de364c070522db75798b0/examples/src/products.ts#L159)

##### getAverageRating()

```ts
getAverageRating(productId): number
```

Get the average rating for a specific product.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `productId` | `string` | The ID of the product. |

###### Returns

`number`

The average rating for the specified product.

###### Source

[products.ts:178](https://github.com/typedoc-plugin-markdown/typedoc-plugin-markdown-examples/blob/20d21e441b853b3f7b2de364c070522db75798b0/examples/src/products.ts#L178)

##### getProductReviews()

```ts
getProductReviews(productId): ProductReview[]
```

Get all product reviews for a specific product.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `productId` | `string` | The ID of the product. |

###### Returns

[`ProductReview`](ProductsModule.md#productreview)[]

An array of product reviews for the specified product.

###### Source

[products.ts:169](https://github.com/typedoc-plugin-markdown/typedoc-plugin-markdown-examples/blob/20d21e441b853b3f7b2de364c070522db75798b0/examples/src/products.ts#L169)

## Interfaces

### Product

Interface representing a product.
Contains the essential identifiers and attributes of a product.

#### Extended by

- [`ProductDetails`](ProductsModule.md#productdetails)

#### Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name of the product. |
| `price` | `number` | Price of the product in the system's set currency. |
| `productId` | `string` | Unique identifier for the product. |

***

### ProductDetails

Interface representing product details.
Extends the basic Product interface to include more comprehensive attributes for detailed product management.

#### Extends

- [`Product`](ProductsModule.md#product)

#### Properties

| Property | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ |
| `category` | [`ProductCategory`](ProductsModule.md#productcategory) | Category of the product as defined by the ProductCategory enum. This categorization helps in organizing products<br />into sections or departments, facilitating easier product discovery and management. | - |
| `description` | `string` | Detailed textual description of the product. This provides potential buyers with more information about the<br />product's features, usage, and benefits. | - |
| `name` | `string` | Name of the product. | [`Product`](ProductsModule.md#product).`name` |
| `price` | `number` | Price of the product in the system's set currency. | [`Product`](ProductsModule.md#product).`price` |
| `productId` | `string` | Unique identifier for the product. | [`Product`](ProductsModule.md#product).`productId` |

***

### ProductReview

Interface representing a product review.

#### Properties

| Property | Type |
| :------ | :------ |
| `comment?` | `string` |
| `productId` | `string` |
| `rating` | `number` |
| `reviewId` | `string` |
| `username` | `string` |
