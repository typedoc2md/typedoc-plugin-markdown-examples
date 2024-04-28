[typedoc-plugin-markdown-examples](../../README.md) • Docs

***

[Home](../../README.md) / [ProductsModule](../README.md) / ProductDetails

# Interface: ProductDetails

Interface representing product details.
Extends the basic Product interface to include more comprehensive attributes for detailed product management.

## Extends

- [`Product`](Product.md)

## Properties

| Property | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ |
| `category` | [`ProductCategory`](../enumerations/ProductCategory.md) | Category of the product as defined by the ProductCategory enum. This categorization helps in organizing products<br />into sections or departments, facilitating easier product discovery and management. | - |
| `description` | `string` | Detailed textual description of the product. This provides potential buyers with more information about the<br />product's features, usage, and benefits. | - |
| `name` | `string` | Name of the product. | [`Product`](Product.md).`name` |
| `price` | `number` | Price of the product in the system's set currency. | [`Product`](Product.md).`price` |
| `productId` | `string` | Unique identifier for the product. | [`Product`](Product.md).`productId` |
