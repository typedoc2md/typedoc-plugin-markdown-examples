[**dummy-typescript-api**](README.md)

***

[Home](README.md) / products

# products

This module contains types and services related to product management.

## Enumerations

### ProductCategory

Defined in: [products.ts:25](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L25)

Enum representing different product categories.
Helps categorize products into logical groupings for easier management and browsing.

#### Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="books"></a> `Books` | `"Books"` | Books category encompasses all genres and types of books, including novels, textbooks, and guides. | [products.ts:33](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L33) |
| <a id="clothing"></a> `Clothing` | `"Clothing"` | Clothing category includes apparel items such as shirts, pants, and dresses. | [products.ts:30](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L30) |
| <a id="electronics"></a> `Electronics` | `"Electronics"` | Electronics category includes items like computers, mobile phones, and other electronic devices. | [products.ts:27](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L27) |
| <a id="homedecor"></a> `HomeDecor` | `"Home Decor"` | Home Decor category includes items used for decorating and furnishing a home, like furniture, paintings, and decor items. | [products.ts:36](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L36) |

## Classes

### ProductInventory

Defined in: [products.ts:60](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L60)

Class representing a product inventory.

#### Constructors

##### new ProductInventory()

```ts
new ProductInventory(): ProductInventory
```

###### Returns

[`ProductInventory`](#productinventory)

#### Methods

##### addProduct()

```ts
addProduct(product): ProductDetails
```

Defined in: [products.ts:68](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L68)

Add a new product to the inventory.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `product` | [`ProductDetails`](#productdetails) | The product to be added. |

###### Returns

[`ProductDetails`](#productdetails)

The added product details.

##### getAllProducts()

```ts
getAllProducts(): ProductDetails[]
```

Defined in: [products.ts:77](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L77)

Get all products in the inventory.

###### Returns

[`ProductDetails`](#productdetails)[]

An array of all product details.

##### getProductById()

```ts
getProductById(productId): ProductDetails
```

Defined in: [products.ts:86](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L86)

Get product details by ID.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `productId` | `string` | The ID of the product. |

###### Returns

[`ProductDetails`](#productdetails)

The product details with the specified ID.

##### getProductsByCategory()

```ts
getProductsByCategory(category): ProductDetails[]
```

Defined in: [products.ts:95](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L95)

Get products by category.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `category` | [`ProductCategory`](#productcategory) | The product category. |

###### Returns

[`ProductDetails`](#productdetails)[]

An array of product details in the specified category.

##### removeProduct()

```ts
removeProduct(productId): ProductDetails
```

Defined in: [products.ts:124](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L124)

Remove a product from the inventory.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `productId` | `string` | The ID of the product to be removed. |

###### Returns

[`ProductDetails`](#productdetails)

The removed product details.

##### updateProductDetails()

```ts
updateProductDetails(productId, updatedDetails): ProductDetails
```

Defined in: [products.ts:105](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L105)

Update product details.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `productId` | `string` | The ID of the product to be updated. |
| `updatedDetails` | [`ProductDetails`](#productdetails) | The updated product details. |

###### Returns

[`ProductDetails`](#productdetails)

The updated product details.

***

### ProductReviewService

Defined in: [products.ts:151](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L151)

Service for managing product reviews.

#### Constructors

##### new ProductReviewService()

```ts
new ProductReviewService(): ProductReviewService
```

###### Returns

[`ProductReviewService`](#productreviewservice)

#### Methods

##### addProductReview()

```ts
addProductReview(review): ProductReview
```

Defined in: [products.ts:159](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L159)

Add a new product review.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `review` | [`ProductReview`](#productreview) | The product review to be added. |

###### Returns

[`ProductReview`](#productreview)

The added product review.

##### getAverageRating()

```ts
getAverageRating(productId): number
```

Defined in: [products.ts:178](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L178)

Get the average rating for a specific product.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `productId` | `string` | The ID of the product. |

###### Returns

`number`

The average rating for the specified product.

##### getProductReviews()

```ts
getProductReviews(productId): ProductReview[]
```

Defined in: [products.ts:169](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L169)

Get all product reviews for a specific product.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `productId` | `string` | The ID of the product. |

###### Returns

[`ProductReview`](#productreview)[]

An array of product reviews for the specified product.

## Interfaces

### Product

Defined in: [products.ts:12](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L12)

Interface representing a product.
Contains the essential identifiers and attributes of a product.

#### Extended by

- [`ProductDetails`](#productdetails)

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="name"></a> `name` | `string` | Name of the product. | [products.ts:16](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L16) |
| <a id="price"></a> `price` | `number` | Price of the product in the system's set currency. | [products.ts:18](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L18) |
| <a id="productid"></a> `productId` | `string` | Unique identifier for the product. | [products.ts:14](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L14) |

***

### ProductDetails

Defined in: [products.ts:43](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L43)

Interface representing product details.
Extends the basic Product interface to include more comprehensive attributes for detailed product management.

#### Extends

- [`Product`](#product)

#### Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="category"></a> `category` | [`ProductCategory`](#productcategory) | Category of the product as defined by the ProductCategory enum. This categorization helps in organizing products into sections or departments, facilitating easier product discovery and management. | - | [products.ts:54](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L54) |
| <a id="description"></a> `description` | `string` | Detailed textual description of the product. This provides potential buyers with more information about the product's features, usage, and benefits. | - | [products.ts:48](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L48) |
| <a id="name-1"></a> `name` | `string` | Name of the product. | [`Product`](#product).[`name`](#name) | [products.ts:16](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L16) |
| <a id="price-1"></a> `price` | `number` | Price of the product in the system's set currency. | [`Product`](#product).[`price`](#price) | [products.ts:18](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L18) |
| <a id="productid-1"></a> `productId` | `string` | Unique identifier for the product. | [`Product`](#product).[`productId`](#productid) | [products.ts:14](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L14) |

***

### ProductReview

Defined in: [products.ts:139](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L139)

Interface representing a product review.

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="comment"></a> `comment?` | `string` | [products.ts:144](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L144) |
| <a id="productid-2"></a> `productId` | `string` | [products.ts:141](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L141) |
| <a id="rating"></a> `rating` | `number` | [products.ts:143](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L143) |
| <a id="reviewid"></a> `reviewId` | `string` | [products.ts:140](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L140) |
| <a id="username"></a> `username` | `string` | [products.ts:142](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L142) |
