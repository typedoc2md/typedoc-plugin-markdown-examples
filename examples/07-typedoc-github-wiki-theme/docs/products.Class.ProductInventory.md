[github-wiki-example](../wiki/Home) / [products](../wiki/products) / ProductInventory

# Class: ProductInventory

Class representing a product inventory.

## Constructors

### new ProductInventory()

> **new ProductInventory**(): [`ProductInventory`](../wiki/products.Class.ProductInventory)

#### Returns

[`ProductInventory`](../wiki/products.Class.ProductInventory)

## Methods

### addProduct()

> **addProduct**(`product`): [`ProductDetails`](../wiki/products.Interface.ProductDetails)

Add a new product to the inventory.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `product` | [`ProductDetails`](../wiki/products.Interface.ProductDetails) | The product to be added. |

#### Returns

[`ProductDetails`](../wiki/products.Interface.ProductDetails)

The added product details.

#### Defined in

products.ts:68

***

### getAllProducts()

> **getAllProducts**(): [`ProductDetails`](../wiki/products.Interface.ProductDetails)[]

Get all products in the inventory.

#### Returns

[`ProductDetails`](../wiki/products.Interface.ProductDetails)[]

An array of all product details.

#### Defined in

products.ts:77

***

### getProductById()

> **getProductById**(`productId`): [`ProductDetails`](../wiki/products.Interface.ProductDetails)

Get product details by ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `productId` | `string` | The ID of the product. |

#### Returns

[`ProductDetails`](../wiki/products.Interface.ProductDetails)

The product details with the specified ID.

#### Defined in

products.ts:86

***

### getProductsByCategory()

> **getProductsByCategory**(`category`): [`ProductDetails`](../wiki/products.Interface.ProductDetails)[]

Get products by category.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `category` | [`ProductCategory`](../wiki/products.Enumeration.ProductCategory) | The product category. |

#### Returns

[`ProductDetails`](../wiki/products.Interface.ProductDetails)[]

An array of product details in the specified category.

#### Defined in

products.ts:95

***

### removeProduct()

> **removeProduct**(`productId`): [`ProductDetails`](../wiki/products.Interface.ProductDetails)

Remove a product from the inventory.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `productId` | `string` | The ID of the product to be removed. |

#### Returns

[`ProductDetails`](../wiki/products.Interface.ProductDetails)

The removed product details.

#### Defined in

products.ts:124

***

### updateProductDetails()

> **updateProductDetails**(`productId`, `updatedDetails`): [`ProductDetails`](../wiki/products.Interface.ProductDetails)

Update product details.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `productId` | `string` | The ID of the product to be updated. |
| `updatedDetails` | [`ProductDetails`](../wiki/products.Interface.ProductDetails) | The updated product details. |

#### Returns

[`ProductDetails`](../wiki/products.Interface.ProductDetails)

The updated product details.

#### Defined in

products.ts:105
