[github-wiki-example](../wiki/Home) / [ProductsModule](../wiki/ProductsModule) / ProductInventory

# Class: ProductInventory

Class representing a product inventory.

## Constructors

### new ProductInventory()

> **new ProductInventory**(): [`ProductInventory`](../wiki/ProductsModule.Class.ProductInventory)

#### Returns

[`ProductInventory`](../wiki/ProductsModule.Class.ProductInventory)

## Properties

| Property | Modifier | Type | Default value |
| :------ | :------ | :------ | :------ |
| `products` | `private` | [`ProductDetails`](../wiki/ProductsModule.Interface.ProductDetails)[] | `[]` |

## Methods

### addProduct()

> **addProduct**(`product`): [`ProductDetails`](../wiki/ProductsModule.Interface.ProductDetails)

Add a new product to the inventory.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `product` | [`ProductDetails`](../wiki/ProductsModule.Interface.ProductDetails) | The product to be added. |

#### Returns

[`ProductDetails`](../wiki/ProductsModule.Interface.ProductDetails)

The added product details.

#### Source

products.ts:68

***

### getAllProducts()

> **getAllProducts**(): [`ProductDetails`](../wiki/ProductsModule.Interface.ProductDetails)[]

Get all products in the inventory.

#### Returns

[`ProductDetails`](../wiki/ProductsModule.Interface.ProductDetails)[]

An array of all product details.

#### Source

products.ts:77

***

### getProductById()

> **getProductById**(`productId`): `undefined` \| [`ProductDetails`](../wiki/ProductsModule.Interface.ProductDetails)

Get product details by ID.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `productId` | `string` | The ID of the product. |

#### Returns

`undefined` \| [`ProductDetails`](../wiki/ProductsModule.Interface.ProductDetails)

The product details with the specified ID.

#### Source

products.ts:86

***

### getProductsByCategory()

> **getProductsByCategory**(`category`): [`ProductDetails`](../wiki/ProductsModule.Interface.ProductDetails)[]

Get products by category.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `category` | [`ProductCategory`](../wiki/ProductsModule.Enumeration.ProductCategory) | The product category. |

#### Returns

[`ProductDetails`](../wiki/ProductsModule.Interface.ProductDetails)[]

An array of product details in the specified category.

#### Source

products.ts:95

***

### removeProduct()

> **removeProduct**(`productId`): `undefined` \| [`ProductDetails`](../wiki/ProductsModule.Interface.ProductDetails)

Remove a product from the inventory.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `productId` | `string` | The ID of the product to be removed. |

#### Returns

`undefined` \| [`ProductDetails`](../wiki/ProductsModule.Interface.ProductDetails)

The removed product details.

#### Source

products.ts:124

***

### updateProductDetails()

> **updateProductDetails**(`productId`, `updatedDetails`): `undefined` \| [`ProductDetails`](../wiki/ProductsModule.Interface.ProductDetails)

Update product details.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `productId` | `string` | The ID of the product to be updated. |
| `updatedDetails` | [`ProductDetails`](../wiki/ProductsModule.Interface.ProductDetails) | The updated product details. |

#### Returns

`undefined` \| [`ProductDetails`](../wiki/ProductsModule.Interface.ProductDetails)

The updated product details.

#### Source

products.ts:105
