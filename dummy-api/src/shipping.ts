/**
 * This module contains types and services related to shipping.
 * It includes definitions for shipping records and services to manage the logistics of shipping orders.
 *
 * @module
 */

/**
 * Interface representing a shipping record.
 * Defines the structure for storing and tracking information about shipments.
 */
export interface ShippingRecord {
  /**
   * Unique identifier for the shipment. This is used to track and reference the shipment throughout the shipping process.
   */
  shipmentId: string;

  /**
   * Identifier for the order being shipped. Links the shipment to a specific customer order.
   */
  orderId: string;

  /**
   * The destination address where the order should be delivered. This is crucial for logistics and routing.
   */
  address: string;

  /**
   * Current status of the shipment (e.g., "Pending", "Shipped", "Delivered"). Provides updates on the shipment progress.
   */
  status: string;
}

/**
 * Service for managing shipping records.
 * Provides methods to handle the logistics of order shipments, including recording and tracking shipments.
 * @class
 */
export class ShippingService {
  /**
   * Stores all shipment records. This array acts as a database to keep track of all shipments handled by the service.
   */
  private shipments: ShippingRecord[] = [];

  /**
   * Ships an order by creating a shipping record and adding it to the list of shipments.
   * This method simulates the action of shipping an order in a real-world scenario.
   * @param shipment - The shipment record to be added.
   * @returns The shipment record that was added to the shipments list.
   */
  shipOrder(shipment: ShippingRecord): ShippingRecord {
    this.shipments.push(shipment);
    return shipment;
  }

  /**
   * Retrieves all shipping records managed by the service.
   * Useful for tracking, auditing, and providing customers with updates on their shipment statuses.
   * @returns An array of all shipping records.
   */
  getAllShipments(): ShippingRecord[] {
    return this.shipments;
  }
}
