[**typedoc-plugin-markdown-examples**](../../README.md) • **Docs**

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

## Methods

### addProduct()

```ts
addProduct(product): ProductDetails
```

Add a new product to the inventory.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `product` | [`ProductDetails`](../interfaces/ProductDetails.md) | The product to be added. |

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)

The added product details.

#### Defined in

products.ts:68

***

### getAllProducts()

```ts
getAllProducts(): ProductDetails[]
```

Get all products in the inventory.

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)[]

An array of all product details.

#### Defined in

products.ts:77

***

### getProductById()

```ts
getProductById(productId): ProductDetails
```

Get product details by ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `productId` | `string` | The ID of the product. |

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)

The product details with the specified ID.

#### Defined in

products.ts:86

***

### getProductsByCategory()

```ts
getProductsByCategory(category): ProductDetails[]
```

Get products by category.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `category` | [`ProductCategory`](../enumerations/ProductCategory.md) | The product category. |

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)[]

An array of product details in the specified category.

#### Defined in

products.ts:95

***

### removeProduct()

```ts
removeProduct(productId): ProductDetails
```

Remove a product from the inventory.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `productId` | `string` | The ID of the product to be removed. |

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)

The removed product details.

#### Defined in

products.ts:124

***

### updateProductDetails()

```ts
updateProductDetails(productId, updatedDetails): ProductDetails
```

Update product details.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `productId` | `string` | The ID of the product to be updated. |
| `updatedDetails` | [`ProductDetails`](../interfaces/ProductDetails.md) | The updated product details. |

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)

The updated product details.

#### Defined in

products.ts:105
