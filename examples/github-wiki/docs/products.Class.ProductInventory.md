[github-wiki-example](../wiki/Home) / [products](../wiki/products) / ProductInventory

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

> **addProduct**(`product`): [`ProductDetails`](../wiki/products.Interface.ProductDetails)

Defined in: [products.ts:68](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L68)

Add a new product to the inventory.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `product` | [`ProductDetails`](../wiki/products.Interface.ProductDetails) | The product to be added. |

#### Returns

[`ProductDetails`](../wiki/products.Interface.ProductDetails)

The added product details.

***

### getAllProducts()

> **getAllProducts**(): [`ProductDetails`](../wiki/products.Interface.ProductDetails)[]

Defined in: [products.ts:77](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L77)

Get all products in the inventory.

#### Returns

[`ProductDetails`](../wiki/products.Interface.ProductDetails)[]

An array of all product details.

***

### getProductById()

> **getProductById**(`productId`): [`ProductDetails`](../wiki/products.Interface.ProductDetails)

Defined in: [products.ts:86](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L86)

Get product details by ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `productId` | `string` | The ID of the product. |

#### Returns

[`ProductDetails`](../wiki/products.Interface.ProductDetails)

The product details with the specified ID.

***

### getProductsByCategory()

> **getProductsByCategory**(`category`): [`ProductDetails`](../wiki/products.Interface.ProductDetails)[]

Defined in: [products.ts:95](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L95)

Get products by category.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `category` | [`ProductCategory`](../wiki/products.Enumeration.ProductCategory) | The product category. |

#### Returns

[`ProductDetails`](../wiki/products.Interface.ProductDetails)[]

An array of product details in the specified category.

***

### removeProduct()

> **removeProduct**(`productId`): [`ProductDetails`](../wiki/products.Interface.ProductDetails)

Defined in: [products.ts:124](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L124)

Remove a product from the inventory.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `productId` | `string` | The ID of the product to be removed. |

#### Returns

[`ProductDetails`](../wiki/products.Interface.ProductDetails)

The removed product details.

***

### updateProductDetails()

> **updateProductDetails**(`productId`, `updatedDetails`): [`ProductDetails`](../wiki/products.Interface.ProductDetails)

Defined in: [products.ts:105](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L105)

Update product details.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `productId` | `string` | The ID of the product to be updated. |
| `updatedDetails` | [`ProductDetails`](../wiki/products.Interface.ProductDetails) | The updated product details. |

#### Returns

[`ProductDetails`](../wiki/products.Interface.ProductDetails)

The updated product details.
