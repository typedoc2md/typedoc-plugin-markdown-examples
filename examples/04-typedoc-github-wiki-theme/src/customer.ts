// customer.ts - Customer Module

/**
 * This module contains types and services related to customer management.
 * @module customer
 */

/**
 * Enum representing different customer types.
 */
export enum CustomerType {
  Regular = "Regular",
  Premium = "Premium",
}

/**
 * Interface representing a customer.
 */
export interface Customer {
  customerId: string;
  name: string;
  email: string;
  address: string;
  type: CustomerType;
}

/**
 * Interface representing customer contact information.
 */
export interface CustomerContact {
  email: string;
  phone?: string;
}

/**
 * Interface representing customer billing information.
 */
export interface CustomerBilling {
  creditCardNumber: string;
  expirationDate: string;
}

/**
 * Interface representing a customer order history.
 */
export interface CustomerOrderHistory {
  orderId: string;
  orderDate: Date;
  totalAmount: number;
}

/**
 * Class representing a customer account.
 */
export class CustomerAccount {
  private customer: Customer;
  private contactInfo: CustomerContact;
  private billingInfo: CustomerBilling;
  private orderHistory: CustomerOrderHistory[];

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
   * Get the customer information.
   * @returns The customer information.
   */
  getCustomer(): Customer {
    return this.customer;
  }

  /**
   * Get the customer contact information.
   * @returns The customer contact information.
   */
  getContactInfo(): CustomerContact {
    return this.contactInfo;
  }

  /**
   * Get the customer billing information.
   * @returns The customer billing information.
   */
  getBillingInfo(): CustomerBilling {
    return this.billingInfo;
  }

  /**
   * Add an order to the customer's order history.
   * @param order - The order to be added to the history.
   */
  addOrderToHistory(order: CustomerOrderHistory): void {
    this.orderHistory.push(order);
  }

  /**
   * Get the customer's order history.
   * @returns An array of the customer's order history.
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
