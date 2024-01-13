**default-options-example** • [Readme](../../README.md) \| [API](../../modules.md)

***

[default-options-example](../../README.md) / [products](../README.md) / ProductInventory

# Class: ProductInventory

Class representing a product inventory.

## Constructors

### new ProductInventory()

> **new ProductInventory**(): [`ProductInventory`](ProductInventory.md)

#### Returns

[`ProductInventory`](ProductInventory.md)

## Properties

### products

> **`private`** **products**: [`ProductDetails`](../interfaces/ProductDetails.md)[] = `[]`

#### Source

[products.ts:39](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/13dc594/examples/01-typedoc-plugin-markdown/src/products.ts#L39)

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

[products.ts:46](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/13dc594/examples/01-typedoc-plugin-markdown/src/products.ts#L46)

***

### getAllProducts()

> **getAllProducts**(): [`ProductDetails`](../interfaces/ProductDetails.md)[]

Get all products in the inventory.

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)[]

An array of all product details.

#### Source

[products.ts:55](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/13dc594/examples/01-typedoc-plugin-markdown/src/products.ts#L55)

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

[products.ts:64](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/13dc594/examples/01-typedoc-plugin-markdown/src/products.ts#L64)

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

[products.ts:73](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/13dc594/examples/01-typedoc-plugin-markdown/src/products.ts#L73)

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

[products.ts:102](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/13dc594/examples/01-typedoc-plugin-markdown/src/products.ts#L102)

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

[products.ts:83](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/13dc594/examples/01-typedoc-plugin-markdown/src/products.ts#L83)

***

Generated using [TypeDoc](https://typedoc.org) and [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org).
