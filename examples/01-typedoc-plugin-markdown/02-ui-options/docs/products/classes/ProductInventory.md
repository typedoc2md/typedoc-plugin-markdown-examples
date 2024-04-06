**ui-options-example** • [API](../../README.md)

***

[Home](../../README.md) / [products](../README.md) / ProductInventory

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

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `products` | `private` | [`ProductDetails`](../interfaces/ProductDetails.md)[] |

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

[products.ts:46](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/01-typedoc-plugin-markdown/src/products.ts#L46)

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

[products.ts:55](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/01-typedoc-plugin-markdown/src/products.ts#L55)

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

[products.ts:64](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/01-typedoc-plugin-markdown/src/products.ts#L64)

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

[products.ts:73](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/01-typedoc-plugin-markdown/src/products.ts#L73)

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

[products.ts:102](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/01-typedoc-plugin-markdown/src/products.ts#L102)

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

[products.ts:83](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/01-typedoc-plugin-markdown/src/products.ts#L83)
