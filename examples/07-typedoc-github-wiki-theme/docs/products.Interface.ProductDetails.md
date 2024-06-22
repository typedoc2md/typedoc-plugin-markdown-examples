[github-wiki-example](../wiki/Home) / [products](../wiki/products) / ProductDetails

# Interface: ProductDetails

Interface representing product details.
Extends the basic Product interface to include more comprehensive attributes for detailed product management.

## Extends

- [`Product`](../wiki/products.Interface.Product)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `category` | [`ProductCategory`](../wiki/products.Enumeration.ProductCategory) | Category of the product as defined by the ProductCategory enum. This categorization helps in organizing products into sections or departments, facilitating easier product discovery and management. | - | products.ts:54 |
| `description` | `string` | Detailed textual description of the product. This provides potential buyers with more information about the product's features, usage, and benefits. | - | products.ts:48 |
| `name` | `string` | Name of the product. | [`Product`](../wiki/products.Interface.Product).`name` | products.ts:16 |
| `price` | `number` | Price of the product in the system's set currency. | [`Product`](../wiki/products.Interface.Product).`price` | products.ts:18 |
| `productId` | `string` | Unique identifier for the product. | [`Product`](../wiki/products.Interface.Product).`productId` | products.ts:14 |
