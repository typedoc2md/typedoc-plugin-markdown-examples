[typedoc-plugin-markdown-examples](../../README.md) • Docs

***

[Home](../../README.md) / [ProductsModule](../README.md) / ProductInventory

# Class: ProductInventory

Class representing a product inventory.

## Constructors

### new ProductInventory()

```ts
new ProductInventory(): ProductInventory
```

#### Returns

[`ProductInventory`](ProductInventory.md)

## Properties

| Property | Modifier | Type | Default value |
| :------ | :------ | :------ | :------ |
| `products` | `private` | [`ProductDetails`](../interfaces/ProductDetails.md)[] | `[]` |

## Methods

### addProduct()

```ts
addProduct(product): ProductDetails
```

Add a new product to the inventory.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `product` | [`ProductDetails`](../interfaces/ProductDetails.md) | The product to be added. |

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)

The added product details.

#### Source

[products.ts:68](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/f6ee18b4865e847a5ae81e3c3d7c2ce83ab384d7/examples/src/products.ts#L68)

***

### getAllProducts()

```ts
getAllProducts(): ProductDetails[]
```

Get all products in the inventory.

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)[]

An array of all product details.

#### Source

[products.ts:77](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/f6ee18b4865e847a5ae81e3c3d7c2ce83ab384d7/examples/src/products.ts#L77)

***

### getProductById()

```ts
getProductById(productId): undefined | ProductDetails
```

Get product details by ID.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `productId` | `string` | The ID of the product. |

#### Returns

`undefined` \| [`ProductDetails`](../interfaces/ProductDetails.md)

The product details with the specified ID.

#### Source

[products.ts:86](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/f6ee18b4865e847a5ae81e3c3d7c2ce83ab384d7/examples/src/products.ts#L86)

***

### getProductsByCategory()

```ts
getProductsByCategory(category): ProductDetails[]
```

Get products by category.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `category` | [`ProductCategory`](../enumerations/ProductCategory.md) | The product category. |

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)[]

An array of product details in the specified category.

#### Source

[products.ts:95](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/f6ee18b4865e847a5ae81e3c3d7c2ce83ab384d7/examples/src/products.ts#L95)

***

### removeProduct()

```ts
removeProduct(productId): undefined | ProductDetails
```

Remove a product from the inventory.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `productId` | `string` | The ID of the product to be removed. |

#### Returns

`undefined` \| [`ProductDetails`](../interfaces/ProductDetails.md)

The removed product details.

#### Source

[products.ts:124](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/f6ee18b4865e847a5ae81e3c3d7c2ce83ab384d7/examples/src/products.ts#L124)

***

### updateProductDetails()

```ts
updateProductDetails(productId, updatedDetails): undefined | ProductDetails
```

Update product details.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `productId` | `string` | The ID of the product to be updated. |
| `updatedDetails` | [`ProductDetails`](../interfaces/ProductDetails.md) | The updated product details. |

#### Returns

`undefined` \| [`ProductDetails`](../interfaces/ProductDetails.md)

The updated product details.

#### Source

[products.ts:105](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/f6ee18b4865e847a5ae81e3c3d7c2ce83ab384d7/examples/src/products.ts#L105)
