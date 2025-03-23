[**Default Options Example**](../../README.md)

***

[Default Options Example](../../modules.md) / [products](../README.md) / ProductInventory

# Class: ProductInventory

Defined in: [products.ts:60](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L60)

Class representing a product inventory.

## Constructors

### Constructor

> **new ProductInventory**(): `ProductInventory`

#### Returns

`ProductInventory`

## Methods

### addProduct()

> **addProduct**(`product`): [`ProductDetails`](../interfaces/ProductDetails.md)

Defined in: [products.ts:68](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L68)

Add a new product to the inventory.

#### Parameters

##### product

[`ProductDetails`](../interfaces/ProductDetails.md)

The product to be added.

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)

The added product details.

***

### getAllProducts()

> **getAllProducts**(): [`ProductDetails`](../interfaces/ProductDetails.md)[]

Defined in: [products.ts:77](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L77)

Get all products in the inventory.

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)[]

An array of all product details.

***

### getProductById()

> **getProductById**(`productId`): [`ProductDetails`](../interfaces/ProductDetails.md)

Defined in: [products.ts:86](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L86)

Get product details by ID.

#### Parameters

##### productId

`string`

The ID of the product.

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)

The product details with the specified ID.

***

### getProductsByCategory()

> **getProductsByCategory**(`category`): [`ProductDetails`](../interfaces/ProductDetails.md)[]

Defined in: [products.ts:95](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L95)

Get products by category.

#### Parameters

##### category

[`ProductCategory`](../enumerations/ProductCategory.md)

The product category.

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)[]

An array of product details in the specified category.

***

### removeProduct()

> **removeProduct**(`productId`): [`ProductDetails`](../interfaces/ProductDetails.md)

Defined in: [products.ts:124](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L124)

Remove a product from the inventory.

#### Parameters

##### productId

`string`

The ID of the product to be removed.

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)

The removed product details.

***

### updateProductDetails()

> **updateProductDetails**(`productId`, `updatedDetails`): [`ProductDetails`](../interfaces/ProductDetails.md)

Defined in: [products.ts:105](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L105)

Update product details.

#### Parameters

##### productId

`string`

The ID of the product to be updated.

##### updatedDetails

[`ProductDetails`](../interfaces/ProductDetails.md)

The updated product details.

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)

The updated product details.
