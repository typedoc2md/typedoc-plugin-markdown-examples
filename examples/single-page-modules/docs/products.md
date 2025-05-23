[**dummy-typescript-api**](README.md)

***

[dummy-typescript-api](README.md) / products

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

##### Constructor

```ts
new ProductInventory(): ProductInventory;
```

###### Returns

[`ProductInventory`](#productinventory)

#### Methods

##### addProduct()

```ts
addProduct(product): ProductDetails;
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
getAllProducts(): ProductDetails[];
```

Defined in: [products.ts:77](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L77)

Get all products in the inventory.

###### Returns

[`ProductDetails`](#productdetails)[]

An array of all product details.

##### getProductById()

```ts
getProductById(productId): ProductDetails;
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
getProductsByCategory(category): ProductDetails[];
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
removeProduct(productId): ProductDetails;
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
updateProductDetails(productId, updatedDetails): ProductDetails;
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

##### Constructor

```ts
new ProductReviewService(): ProductReviewService;
```

###### Returns

[`ProductReviewService`](#productreviewservice)

#### Methods

##### addProductReview()

```ts
addProductReview(review): ProductReview;
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
getAverageRating(productId): number;
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
getProductReviews(productId): ProductReview[];
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

##### name

```ts
name: string;
```

Defined in: [products.ts:16](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L16)

Name of the product.

##### price

```ts
price: number;
```

Defined in: [products.ts:18](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L18)

Price of the product in the system's set currency.

##### productId

```ts
productId: string;
```

Defined in: [products.ts:14](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L14)

Unique identifier for the product.

***

### ProductDetails

Defined in: [products.ts:43](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L43)

Interface representing product details.
Extends the basic Product interface to include more comprehensive attributes for detailed product management.

#### Extends

- [`Product`](#product)

#### Properties

##### category

```ts
category: ProductCategory;
```

Defined in: [products.ts:54](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L54)

Category of the product as defined by the ProductCategory enum. This categorization helps in organizing products
into sections or departments, facilitating easier product discovery and management.

##### description

```ts
description: string;
```

Defined in: [products.ts:48](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L48)

Detailed textual description of the product. This provides potential buyers with more information about the
product's features, usage, and benefits.

##### name

```ts
name: string;
```

Defined in: [products.ts:16](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L16)

Name of the product.

###### Inherited from

[`Product`](#product).[`name`](#name)

##### price

```ts
price: number;
```

Defined in: [products.ts:18](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L18)

Price of the product in the system's set currency.

###### Inherited from

[`Product`](#product).[`price`](#price)

##### productId

```ts
productId: string;
```

Defined in: [products.ts:14](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L14)

Unique identifier for the product.

###### Inherited from

[`Product`](#product).[`productId`](#productid)

***

### ProductReview

Defined in: [products.ts:139](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L139)

Interface representing a product review.

#### Properties

##### comment?

```ts
optional comment: string;
```

Defined in: [products.ts:144](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L144)

##### productId

```ts
productId: string;
```

Defined in: [products.ts:141](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L141)

##### rating

```ts
rating: number;
```

Defined in: [products.ts:143](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L143)

##### reviewId

```ts
reviewId: string;
```

Defined in: [products.ts:140](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L140)

##### username

```ts
username: string;
```

Defined in: [products.ts:142](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L142)
