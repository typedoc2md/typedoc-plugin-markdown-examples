// billing.ts - Billing Module

/**
 * This module contains types and services related to billing.
 * @module billing
 */

/**
 * Enum representing different types of payment methods.
 */
export enum PaymentMethod {
  CreditCard = "Credit Card",
  PayPal = "PayPal",
  BankTransfer = "Bank Transfer",
}

/**
 * Enum representing different transaction statuses.
 */
export enum TransactionStatus {
  Pending = "Pending",
  Completed = "Completed",
  Failed = "Failed",
}

/**
 * Interface representing a billing transaction.
 */
export interface BillingTransaction {
  transactionId: string;
  orderId: string;
  amount: number;
  paymentMethod: PaymentMethod;
  status: TransactionStatus;
}

/**
 * Interface representing a billing receipt.
 */
export interface BillingReceipt {
  receiptId: string;
  transaction: BillingTransaction;
  timestamp: number;
}

/**
 * Service for managing billing transactions.
 * @class
 */
export class BillingService {
  private transactions: BillingTransaction[] = [];

  /**
   * Process a billing transaction.
   * @param transaction - The billing transaction to be processed.
   * @returns The processed billing transaction.
   */
  processTransaction(transaction: BillingTransaction): BillingTransaction {
    this.transactions.push(transaction);
    return transaction;
  }

  /**
   * Get all billing transactions.
   * @returns An array of all billing transactions.
   */
  getAllTransactions(): BillingTransaction[] {
    return this.transactions;
  }
}

/**
 * Service for managing billing history.
 * @class
 */
export class BillingHistoryService {
  private history: BillingTransaction[] = [];

  /**
   * Add a transaction to the billing history.
   * @param transaction - The billing transaction to be added to the history.
   */
  addTransactionToHistory(transaction: BillingTransaction): void {
    this.history.push(transaction);
  }

  /**
   * Get the entire billing history.
   * @returns An array of all billing transactions in the history.
   */
  getBillingHistory(): BillingTransaction[] {
    return this.history;
  }
}

/**
 * Service for generating billing receipts.
 * @class
 */
export class BillingReceiptService {
  private receipts: BillingReceipt[] = [];

  /**
   * Generate a billing receipt for a transaction.
   * @param transaction - The billing transaction for which to generate a receipt.
   * @returns The generated billing receipt.
   */
  generateReceipt(transaction: BillingTransaction): BillingReceipt {
    const receipt: BillingReceipt = {
      receiptId: `receipt_${Date.now()}`,
      transaction,
      timestamp: Date.now(),
    };
    this.receipts.push(receipt);
    return receipt;
  }

  /**
   * Get all billing receipts.
   * @returns An array of all billing receipts.
   */
  getAllReceipts(): BillingReceipt[] {
    return this.receipts;
  }
}
