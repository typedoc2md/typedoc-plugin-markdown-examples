// products.ts - Products Module

/**
 * This module contains types and services related to product management.
 * @module products
 */

/**
 * Interface representing a product.
 */
export interface Product {
  productId: string;
  name: string;
  price: number;
}

/**
 * Enum representing different product categories.
 */
export enum ProductCategory {
  Electronics = "Electronics",
  Clothing = "Clothing",
  Books = "Books",
  HomeDecor = "Home Decor",
}

/**
 * Interface representing product details.
 */
export interface ProductDetails extends Product {
  description: string;
  category: ProductCategory;
}

/**
 * Class representing a product inventory.
 */
export class ProductInventory {
  private products: ProductDetails[] = [];

  /**
   * Add a new product to the inventory.
   * @param product - The product to be added.
   * @returns The added product details.
   */
  addProduct(product: ProductDetails): ProductDetails {
    this.products.push(product);
    return product;
  }

  /**
   * Get all products in the inventory.
   * @returns An array of all product details.
   */
  getAllProducts(): ProductDetails[] {
    return this.products;
  }

  /**
   * Get product details by ID.
   * @param productId - The ID of the product.
   * @returns The product details with the specified ID.
   */
  getProductById(productId: string): ProductDetails | undefined {
    return this.products.find((product) => product.productId === productId);
  }

  /**
   * Get products by category.
   * @param category - The product category.
   * @returns An array of product details in the specified category.
   */
  getProductsByCategory(category: ProductCategory): ProductDetails[] {
    return this.products.filter((product) => product.category === category);
  }

  /**
   * Update product details.
   * @param productId - The ID of the product to be updated.
   * @param updatedDetails - The updated product details.
   * @returns The updated product details.
   */
  updateProductDetails(
    productId: string,
    updatedDetails: ProductDetails
  ): ProductDetails | undefined {
    const index = this.products.findIndex(
      (product) => product.productId === productId
    );
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...updatedDetails };
      return this.products[index];
    }
    return undefined;
  }

  /**
   * Remove a product from the inventory.
   * @param productId - The ID of the product to be removed.
   * @returns The removed product details.
   */
  removeProduct(productId: string): ProductDetails | undefined {
    const index = this.products.findIndex(
      (product) => product.productId === productId
    );
    if (index !== -1) {
      const removedProduct = this.products.splice(index, 1)[0];
      return removedProduct;
    }
    return undefined;
  }
}

/**
 * Interface representing a product review.
 */
export interface ProductReview {
  reviewId: string;
  productId: string;
  username: string;
  rating: number;
  comment?: string;
}

/**
 * Service for managing product reviews.
 * @class
 */
export class ProductReviewService {
  private reviews: ProductReview[] = [];

  /**
   * Add a new product review.
   * @param review - The product review to be added.
   * @returns The added product review.
   */
  addProductReview(review: ProductReview): ProductReview {
    this.reviews.push(review);
    return review;
  }

  /**
   * Get all product reviews for a specific product.
   * @param productId - The ID of the product.
   * @returns An array of product reviews for the specified product.
   */
  getProductReviews(productId: string): ProductReview[] {
    return this.reviews.filter((review) => review.productId === productId);
  }

  /**
   * Get the average rating for a specific product.
   * @param productId - The ID of the product.
   * @returns The average rating for the specified product.
   */
  getAverageRating(productId: string): number {
    const productReviews = this.getProductReviews(productId);
    if (productReviews.length === 0) {
      return 0;
    }

    const totalRating = productReviews.reduce(
      (sum, review) => sum + review.rating,
      0
    );
    return totalRating / productReviews.length;
  }
}
