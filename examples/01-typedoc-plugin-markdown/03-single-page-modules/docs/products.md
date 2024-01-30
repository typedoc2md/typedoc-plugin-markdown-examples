[single-page-modules-example](README.md) / products

# products

This module contains types and services related to product management.

## Enumerations

### ProductCategory

Enum representing different product categories.

#### Enumeration Members

##### Books

> **Books**: `"Books"`

###### Source

[products.ts:23](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/01-typedoc-plugin-markdown/src/products.ts#L23)

##### Clothing

> **Clothing**: `"Clothing"`

###### Source

[products.ts:22](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/01-typedoc-plugin-markdown/src/products.ts#L22)

##### Electronics

> **Electronics**: `"Electronics"`

###### Source

[products.ts:21](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/01-typedoc-plugin-markdown/src/products.ts#L21)

##### HomeDecor

> **HomeDecor**: `"Home Decor"`

###### Source

[products.ts:24](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/01-typedoc-plugin-markdown/src/products.ts#L24)

## Classes

### ProductInventory

Class representing a product inventory.

#### Constructors

##### new ProductInventory()

> **new ProductInventory**(): [`ProductInventory`](products.md#productinventory)

###### Returns

[`ProductInventory`](products.md#productinventory)

#### Properties

##### products

> **`private`** **products**: [`ProductDetails`](products.md#productdetails)[] = `[]`

###### Source

[products.ts:39](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/01-typedoc-plugin-markdown/src/products.ts#L39)

#### Methods

##### addProduct()

> **addProduct**(`product`): [`ProductDetails`](products.md#productdetails)

Add a new product to the inventory.

###### Parameters

• `product`: [`ProductDetails`](products.md#productdetails)

The product to be added.

###### Returns

[`ProductDetails`](products.md#productdetails)

The added product details.

###### Source

[products.ts:46](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/01-typedoc-plugin-markdown/src/products.ts#L46)

##### getAllProducts()

> **getAllProducts**(): [`ProductDetails`](products.md#productdetails)[]

Get all products in the inventory.

###### Returns

[`ProductDetails`](products.md#productdetails)[]

An array of all product details.

###### Source

[products.ts:55](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/01-typedoc-plugin-markdown/src/products.ts#L55)

##### getProductById()

> **getProductById**(`productId`): `undefined` \| [`ProductDetails`](products.md#productdetails)

Get product details by ID.

###### Parameters

• `productId`: `string`

The ID of the product.

###### Returns

`undefined` \| [`ProductDetails`](products.md#productdetails)

The product details with the specified ID.

###### Source

[products.ts:64](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/01-typedoc-plugin-markdown/src/products.ts#L64)

##### getProductsByCategory()

> **getProductsByCategory**(`category`): [`ProductDetails`](products.md#productdetails)[]

Get products by category.

###### Parameters

• `category`: [`ProductCategory`](products.md#productcategory)

The product category.

###### Returns

[`ProductDetails`](products.md#productdetails)[]

An array of product details in the specified category.

###### Source

[products.ts:73](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/01-typedoc-plugin-markdown/src/products.ts#L73)

##### removeProduct()

> **removeProduct**(`productId`): `undefined` \| [`ProductDetails`](products.md#productdetails)

Remove a product from the inventory.

###### Parameters

• `productId`: `string`

The ID of the product to be removed.

###### Returns

`undefined` \| [`ProductDetails`](products.md#productdetails)

The removed product details.

###### Source

[products.ts:102](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/01-typedoc-plugin-markdown/src/products.ts#L102)

##### updateProductDetails()

> **updateProductDetails**(`productId`, `updatedDetails`): `undefined` \| [`ProductDetails`](products.md#productdetails)

Update product details.

###### Parameters

• `productId`: `string`

The ID of the product to be updated.

• `updatedDetails`: [`ProductDetails`](products.md#productdetails)

The updated product details.

###### Returns

`undefined` \| [`ProductDetails`](products.md#productdetails)

The updated product details.

###### Source

[products.ts:83](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/01-typedoc-plugin-markdown/src/products.ts#L83)

***

### ProductReviewService

Service for managing product reviews.

#### Constructors

##### new ProductReviewService()

> **new ProductReviewService**(): [`ProductReviewService`](products.md#productreviewservice)

###### Returns

[`ProductReviewService`](products.md#productreviewservice)

#### Properties

##### reviews

> **`private`** **reviews**: [`ProductReview`](products.md#productreview)[] = `[]`

###### Source

[products.ts:130](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/01-typedoc-plugin-markdown/src/products.ts#L130)

#### Methods

##### addProductReview()

> **addProductReview**(`review`): [`ProductReview`](products.md#productreview)

Add a new product review.

###### Parameters

• `review`: [`ProductReview`](products.md#productreview)

The product review to be added.

###### Returns

[`ProductReview`](products.md#productreview)

The added product review.

###### Source

[products.ts:137](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/01-typedoc-plugin-markdown/src/products.ts#L137)

##### getAverageRating()

> **getAverageRating**(`productId`): `number`

Get the average rating for a specific product.

###### Parameters

• `productId`: `string`

The ID of the product.

###### Returns

`number`

The average rating for the specified product.

###### Source

[products.ts:156](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/01-typedoc-plugin-markdown/src/products.ts#L156)

##### getProductReviews()

> **getProductReviews**(`productId`): [`ProductReview`](products.md#productreview)[]

Get all product reviews for a specific product.

###### Parameters

• `productId`: `string`

The ID of the product.

###### Returns

[`ProductReview`](products.md#productreview)[]

An array of product reviews for the specified product.

###### Source

[products.ts:147](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/01-typedoc-plugin-markdown/src/products.ts#L147)

## Interfaces

### Product

Interface representing a product.

#### Extended by

- [`ProductDetails`](products.md#productdetails)

#### Properties

##### name

> **name**: `string`

###### Source

[products.ts:13](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/01-typedoc-plugin-markdown/src/products.ts#L13)

##### price

> **price**: `number`

###### Source

[products.ts:14](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/01-typedoc-plugin-markdown/src/products.ts#L14)

##### productId

> **productId**: `string`

###### Source

[products.ts:12](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/01-typedoc-plugin-markdown/src/products.ts#L12)

***

### ProductDetails

Interface representing product details.

#### Extends

- [`Product`](products.md#product)

#### Properties

##### category

> **category**: [`ProductCategory`](products.md#productcategory)

###### Source

[products.ts:32](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/01-typedoc-plugin-markdown/src/products.ts#L32)

##### description

> **description**: `string`

###### Source

[products.ts:31](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/01-typedoc-plugin-markdown/src/products.ts#L31)

##### name

> **name**: `string`

###### Inherited from

[`Product`](products.md#product).[`name`](products.md#name)

###### Source

[products.ts:13](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/01-typedoc-plugin-markdown/src/products.ts#L13)

##### price

> **price**: `number`

###### Inherited from

[`Product`](products.md#product).[`price`](products.md#price)

###### Source

[products.ts:14](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/01-typedoc-plugin-markdown/src/products.ts#L14)

##### productId

> **productId**: `string`

###### Inherited from

[`Product`](products.md#product).[`productId`](products.md#productid)

###### Source

[products.ts:12](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/01-typedoc-plugin-markdown/src/products.ts#L12)

***

### ProductReview

Interface representing a product review.

#### Properties

##### comment?

> **comment**?: `string`

###### Source

[products.ts:122](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/01-typedoc-plugin-markdown/src/products.ts#L122)

##### productId

> **productId**: `string`

###### Source

[products.ts:119](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/01-typedoc-plugin-markdown/src/products.ts#L119)

##### rating

> **rating**: `number`

###### Source

[products.ts:121](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/01-typedoc-plugin-markdown/src/products.ts#L121)

##### reviewId

> **reviewId**: `string`

###### Source

[products.ts:118](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/01-typedoc-plugin-markdown/src/products.ts#L118)

##### username

> **username**: `string`

###### Source

[products.ts:120](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/01-typedoc-plugin-markdown/src/products.ts#L120)

***

Generated using [TypeDoc](https://typedoc.org) and [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org).
