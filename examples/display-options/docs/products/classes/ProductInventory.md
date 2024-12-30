[**dummy-typescript-api**](../../README.md)

***

[Home](../../README.md) / [products](../README.md) / ProductInventory

# Class: ProductInventory

Defined in: [products.ts:60](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L60)

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

Defined in: [products.ts:68](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L68)

Add a new product to the inventory.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `product` | [`ProductDetails`](../interfaces/ProductDetails.md) | The product to be added. |

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)

The added product details.

***

### getAllProducts()

```ts
getAllProducts(): ProductDetails[]
```

Defined in: [products.ts:77](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L77)

Get all products in the inventory.

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)[]

An array of all product details.

***

### getProductById()

```ts
getProductById(productId): ProductDetails
```

Defined in: [products.ts:86](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L86)

Get product details by ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `productId` | `string` | The ID of the product. |

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)

The product details with the specified ID.

***

### getProductsByCategory()

```ts
getProductsByCategory(category): ProductDetails[]
```

Defined in: [products.ts:95](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L95)

Get products by category.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `category` | [`ProductCategory`](../enumerations/ProductCategory.md) | The product category. |

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)[]

An array of product details in the specified category.

***

### removeProduct()

```ts
removeProduct(productId): ProductDetails
```

Defined in: [products.ts:124](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L124)

Remove a product from the inventory.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `productId` | `string` | The ID of the product to be removed. |

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)

The removed product details.

***

### updateProductDetails()

```ts
updateProductDetails(productId, updatedDetails): ProductDetails
```

Defined in: [products.ts:105](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L105)

Update product details.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `productId` | `string` | The ID of the product to be updated. |
| `updatedDetails` | [`ProductDetails`](../interfaces/ProductDetails.md) | The updated product details. |

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)

The updated product details.
