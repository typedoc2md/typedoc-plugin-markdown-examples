**typedoc-plugin-markdown-examples** • [Readme](../../README.md) \| [API](../../modules.md)

***

[typedoc-plugin-markdown-examples](../../README.md) / [ProductsModule](../README.md) / ProductInventory

# Class: ProductInventory

Class representing a product inventory.

## Constructors

### new ProductInventory()

> **new ProductInventory**(): [`ProductInventory`](ProductInventory.md)

#### Returns

[`ProductInventory`](ProductInventory.md)

## Properties

### products

> `private` **products**: [`ProductDetails`](../interfaces/ProductDetails.md)[] = `[]`

#### Source

products.ts:61

## Methods

### addProduct()

> **addProduct**(`product`): [`ProductDetails`](../interfaces/ProductDetails.md)

Add a new product to the inventory.

#### Parameters

• **product**: [`ProductDetails`](../interfaces/ProductDetails.md)

The product to be added.

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)

The added product details.

#### Source

products.ts:68

***

### getAllProducts()

> **getAllProducts**(): [`ProductDetails`](../interfaces/ProductDetails.md)[]

Get all products in the inventory.

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)[]

An array of all product details.

#### Source

products.ts:77

***

### getProductById()

> **getProductById**(`productId`): `undefined` \| [`ProductDetails`](../interfaces/ProductDetails.md)

Get product details by ID.

#### Parameters

• **productId**: `string`

The ID of the product.

#### Returns

`undefined` \| [`ProductDetails`](../interfaces/ProductDetails.md)

The product details with the specified ID.

#### Source

products.ts:86

***

### getProductsByCategory()

> **getProductsByCategory**(`category`): [`ProductDetails`](../interfaces/ProductDetails.md)[]

Get products by category.

#### Parameters

• **category**: [`ProductCategory`](../enumerations/ProductCategory.md)

The product category.

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)[]

An array of product details in the specified category.

#### Source

products.ts:95

***

### removeProduct()

> **removeProduct**(`productId`): `undefined` \| [`ProductDetails`](../interfaces/ProductDetails.md)

Remove a product from the inventory.

#### Parameters

• **productId**: `string`

The ID of the product to be removed.

#### Returns

`undefined` \| [`ProductDetails`](../interfaces/ProductDetails.md)

The removed product details.

#### Source

products.ts:124

***

### updateProductDetails()

> **updateProductDetails**(`productId`, `updatedDetails`): `undefined` \| [`ProductDetails`](../interfaces/ProductDetails.md)

Update product details.

#### Parameters

• **productId**: `string`

The ID of the product to be updated.

• **updatedDetails**: [`ProductDetails`](../interfaces/ProductDetails.md)

The updated product details.

#### Returns

`undefined` \| [`ProductDetails`](../interfaces/ProductDetails.md)

The updated product details.

#### Source

products.ts:105
