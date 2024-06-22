// shipping.ts - Shipping Module

/**
 * This module contains types and services related to shipping.
 * @module shipping
 */

/**
 * Interface representing a shipping record.
 */
export interface ShippingRecord {
  shipmentId: string;
  orderId: string;
  address: string;
  status: string;
}

/**
 * Service for managing shipping records.
 * @class
 */
export class ShippingService {
  private shipments: ShippingRecord[] = [];

  /**
   * Ship an order.
   * @param shipment - The shipment record.
   * @returns The shipped record.
   */
  shipOrder(shipment: ShippingRecord): ShippingRecord {
    this.shipments.push(shipment);
    return shipment;
  }

  /**
   * Get all shipping records.
   * @returns An array of all shipping records.
   */
  getAllShipments(): ShippingRecord[] {
    return this.shipments;
  }
}
