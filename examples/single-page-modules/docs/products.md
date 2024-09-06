[**dummy-typescript-api**](README.md) • **Docs**

***

[Home](README.md) / products

# products

This module contains types and services related to product management.

## Enumerations

### ProductCategory

Enum representing different product categories.
Helps categorize products into logical groupings for easier management and browsing.

#### Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `Books` | `"Books"` | Books category encompasses all genres and types of books, including novels, textbooks, and guides. | [products.ts:33](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L33) |
| `Clothing` | `"Clothing"` | Clothing category includes apparel items such as shirts, pants, and dresses. | [products.ts:30](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L30) |
| `Electronics` | `"Electronics"` | Electronics category includes items like computers, mobile phones, and other electronic devices. | [products.ts:27](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L27) |
| `HomeDecor` | `"Home Decor"` | Home Decor category includes items used for decorating and furnishing a home, like furniture, paintings, and decor items. | [products.ts:36](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L36) |

## Classes

### ProductInventory

Class representing a product inventory.

#### Constructors

##### new ProductInventory()

```ts
new ProductInventory(): ProductInventory
```

###### Returns

[`ProductInventory`](products.md#productinventory)

#### Methods

##### addProduct()

```ts
addProduct(product): ProductDetails
```

Add a new product to the inventory.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `product` | [`ProductDetails`](products.md#productdetails) | The product to be added. |

###### Returns

[`ProductDetails`](products.md#productdetails)

The added product details.

###### Defined in

[products.ts:68](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L68)

##### getAllProducts()

```ts
getAllProducts(): ProductDetails[]
```

Get all products in the inventory.

###### Returns

[`ProductDetails`](products.md#productdetails)[]

An array of all product details.

###### Defined in

[products.ts:77](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L77)

##### getProductById()

```ts
getProductById(productId): ProductDetails
```

Get product details by ID.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `productId` | `string` | The ID of the product. |

###### Returns

[`ProductDetails`](products.md#productdetails)

The product details with the specified ID.

###### Defined in

[products.ts:86](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L86)

##### getProductsByCategory()

```ts
getProductsByCategory(category): ProductDetails[]
```

Get products by category.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `category` | [`ProductCategory`](products.md#productcategory) | The product category. |

###### Returns

[`ProductDetails`](products.md#productdetails)[]

An array of product details in the specified category.

###### Defined in

[products.ts:95](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L95)

##### removeProduct()

```ts
removeProduct(productId): ProductDetails
```

Remove a product from the inventory.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `productId` | `string` | The ID of the product to be removed. |

###### Returns

[`ProductDetails`](products.md#productdetails)

The removed product details.

###### Defined in

[products.ts:124](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L124)

##### updateProductDetails()

```ts
updateProductDetails(productId, updatedDetails): ProductDetails
```

Update product details.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `productId` | `string` | The ID of the product to be updated. |
| `updatedDetails` | [`ProductDetails`](products.md#productdetails) | The updated product details. |

###### Returns

[`ProductDetails`](products.md#productdetails)

The updated product details.

###### Defined in

[products.ts:105](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L105)

***

### ProductReviewService

Service for managing product reviews.

#### Constructors

##### new ProductReviewService()

```ts
new ProductReviewService(): ProductReviewService
```

###### Returns

[`ProductReviewService`](products.md#productreviewservice)

#### Methods

##### addProductReview()

```ts
addProductReview(review): ProductReview
```

Add a new product review.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `review` | [`ProductReview`](products.md#productreview) | The product review to be added. |

###### Returns

[`ProductReview`](products.md#productreview)

The added product review.

###### Defined in

[products.ts:159](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L159)

##### getAverageRating()

```ts
getAverageRating(productId): number
```

Get the average rating for a specific product.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `productId` | `string` | The ID of the product. |

###### Returns

`number`

The average rating for the specified product.

###### Defined in

[products.ts:178](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L178)

##### getProductReviews()

```ts
getProductReviews(productId): ProductReview[]
```

Get all product reviews for a specific product.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `productId` | `string` | The ID of the product. |

###### Returns

[`ProductReview`](products.md#productreview)[]

An array of product reviews for the specified product.

###### Defined in

[products.ts:169](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L169)

## Interfaces

### Product

Interface representing a product.
Contains the essential identifiers and attributes of a product.

#### Extended by

- [`ProductDetails`](products.md#productdetails)

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `name` | `string` | Name of the product. | [products.ts:16](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L16) |
| `price` | `number` | Price of the product in the system's set currency. | [products.ts:18](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L18) |
| `productId` | `string` | Unique identifier for the product. | [products.ts:14](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L14) |

***

### ProductDetails

Interface representing product details.
Extends the basic Product interface to include more comprehensive attributes for detailed product management.

#### Extends

- [`Product`](products.md#product)

#### Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `category` | [`ProductCategory`](products.md#productcategory) | Category of the product as defined by the ProductCategory enum. This categorization helps in organizing products into sections or departments, facilitating easier product discovery and management. | - | [products.ts:54](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L54) |
| `description` | `string` | Detailed textual description of the product. This provides potential buyers with more information about the product's features, usage, and benefits. | - | [products.ts:48](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L48) |
| `name` | `string` | Name of the product. | [`Product`](products.md#product).`name` | [products.ts:16](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L16) |
| `price` | `number` | Price of the product in the system's set currency. | [`Product`](products.md#product).`price` | [products.ts:18](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L18) |
| `productId` | `string` | Unique identifier for the product. | [`Product`](products.md#product).`productId` | [products.ts:14](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L14) |

***

### ProductReview

Interface representing a product review.

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `comment?` | `string` | [products.ts:144](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L144) |
| `productId` | `string` | [products.ts:141](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L141) |
| `rating` | `number` | [products.ts:143](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L143) |
| `reviewId` | `string` | [products.ts:140](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L140) |
| `username` | `string` | [products.ts:142](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L142) |
