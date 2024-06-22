[**Default Options Example**](../../README.md) • **Docs**

***

[Default Options Example](../../modules.md) / [products](../README.md) / ProductInventory

# Class: ProductInventory

Class representing a product inventory.

## Constructors

### new ProductInventory()

> **new ProductInventory**(): [`ProductInventory`](ProductInventory.md)

#### Returns

[`ProductInventory`](ProductInventory.md)

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

#### Defined in

products.ts:68

***

### getAllProducts()

> **getAllProducts**(): [`ProductDetails`](../interfaces/ProductDetails.md)[]

Get all products in the inventory.

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)[]

An array of all product details.

#### Defined in

products.ts:77

***

### getProductById()

> **getProductById**(`productId`): [`ProductDetails`](../interfaces/ProductDetails.md)

Get product details by ID.

#### Parameters

• **productId**: `string`

The ID of the product.

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)

The product details with the specified ID.

#### Defined in

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

#### Defined in

products.ts:95

***

### removeProduct()

> **removeProduct**(`productId`): [`ProductDetails`](../interfaces/ProductDetails.md)

Remove a product from the inventory.

#### Parameters

• **productId**: `string`

The ID of the product to be removed.

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)

The removed product details.

#### Defined in

products.ts:124

***

### updateProductDetails()

> **updateProductDetails**(`productId`, `updatedDetails`): [`ProductDetails`](../interfaces/ProductDetails.md)

Update product details.

#### Parameters

• **productId**: `string`

The ID of the product to be updated.

• **updatedDetails**: [`ProductDetails`](../interfaces/ProductDetails.md)

The updated product details.

#### Returns

[`ProductDetails`](../interfaces/ProductDetails.md)

The updated product details.

#### Defined in

products.ts:105
