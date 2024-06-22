// customer.ts - Customer Module

/**
 * This module contains types and services related to customer management.
 *
 * @module
 */

/**
 * Enum representing different customer types.
 * These classifications help tailor services and benefits according to customer loyalty and value.
 */
export enum CustomerType {
  /** Represents a regular customer who receives standard services and pricing. */
  Regular = "Regular",
  /** Represents a premium customer who enjoys additional benefits, discounts, and services. */
  Premium = "Premium",
}

/**
 * Interface representing a customer.
 * Stores comprehensive details about a customer necessary for various business operations.
 */
export interface Customer {
  /** A unique identifier for the customer, essential for tracking and customer management. */
  customerId: string;
  /** The full name of the customer, used for personalization and identification. */
  name: string;
  /** The primary email address of the customer, used for communication and digital receipts. */
  email: string;
  /** The physical address of the customer, used for shipping and billing purposes. */
  address: string;
  /** The classification of the customer, which can affect the level of service and pricing they receive. */
  type: CustomerType;
}

/**
 * Interface representing customer contact information.
 * Essential for communication and service delivery.
 */
export interface CustomerContact {
  /** Primary email address for customer communications. */
  email: string;
  /** Optional phone number for additional contact or urgent communications. */
  phone?: string;
}

/**
 * Interface representing customer billing information.
 * Used for processing payments and managing financial transactions.
 */
export interface CustomerBilling {
  /** The customer's credit card number, used for billing and payment processing. */
  creditCardNumber: string;
  /** The expiration date of the credit card, important for validating the card's current validity. */
  expirationDate: string;
}

/**
 * Interface representing a customer's order history.
 * Useful for tracking past transactions and analyzing customer behavior.
 */
export interface CustomerOrderHistory {
  /** Unique identifier for each order, crucial for order tracking and management. */
  orderId: string;
  /** The date when the order was placed, important for historical data and analytics. */
  orderDate: Date;
  /** The total amount spent on the order, used for financial records and customer spending analysis. */
  totalAmount: number;
}

/**
 * Class representing a customer account.
 * Manages and integrates different aspects of customer data and interactions with the business.
 */
export class CustomerAccount {
  private customer: Customer; // Customer's profile information.
  private contactInfo: CustomerContact; // Contact details specific to the customer.
  private billingInfo: CustomerBilling; // Billing details associated with the customer.
  private orderHistory: CustomerOrderHistory[]; // List of past orders made by the customer.

  /**
   * Constructs a new CustomerAccount instance.
   * @param customer - Basic customer profile information.
   * @param contactInfo - Contact details for the customer.
   * @param billingInfo - Customer's billing information.
   */
  constructor(
    customer: Customer,
    contactInfo: CustomerContact,
    billingInfo: CustomerBilling
  ) {
    this.customer = customer;
    this.contactInfo = contactInfo;
    this.billingInfo = billingInfo;
    this.orderHistory = [];
  }

  /**
   * Retrieves the stored customer profile information.
   * @returns The customer's profile data.
   */
  getCustomer(): Customer {
    return this.customer;
  }

  /**
   * Retrieves the contact information of the customer.
   * @returns The contact details.
   */
  getContactInfo(): CustomerContact {
    return this.contactInfo;
  }

  /**
   * Retrieves the billing information of the customer.
   * @returns The billing details.
   */
  getBillingInfo(): CustomerBilling {
    return this.billingInfo;
  }

  /**
   * Adds a new order to the customer's historical record.
   * @param order - The order to be added to the history.
   */
  addOrderToHistory(order: CustomerOrderHistory): void {
    this.orderHistory.push(order);
  }

  /**
   * Retrieves the full history of orders made by the customer.
   * @returns An array of order history records.
   */
  getOrderHistory(): CustomerOrderHistory[] {
    return this.orderHistory;
  }
}
/**
 * Service for managing customers.
 * @class
 */
export class CustomerService {
  private customers: CustomerAccount[] = [];

  /**
   * Add a new customer.
   * @param customer - The customer to be added.
   * @param contactInfo - The contact information for the customer.
   * @param billingInfo - The billing information for the customer.
   * @returns The added customer account.
   */
  addCustomer(
    customer: Customer,
    contactInfo: CustomerContact,
    billingInfo: CustomerBilling
  ): CustomerAccount {
    const customerAccount = new CustomerAccount(
      customer,
      contactInfo,
      billingInfo
    );
    this.customers.push(customerAccount);
    return customerAccount;
  }

  /**
   * Get all customer accounts.
   * @returns An array of all customer accounts.
   */
  getAllCustomers(): CustomerAccount[] {
    return this.customers;
  }

  /**
   * Get a customer account by ID.
   * @param customerId - The ID of the customer.
   * @returns The customer account with the specified ID.
   */
  getCustomerById(customerId: string): CustomerAccount | undefined {
    return this.customers.find(
      (customer) => customer.getCustomer().customerId === customerId
    );
  }
}
