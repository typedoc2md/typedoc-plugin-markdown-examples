// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const typedocSidebar = { items: [
  {
    "type": "category",
    "label": "billing",
    "items": [
      {
        "type": "category",
        "label": "Classes",
        "items": [
          {
            "type": "doc",
            "id": "api/billing/classes/BillingHistoryService",
            "label": "BillingHistoryService"
          },
          {
            "type": "doc",
            "id": "api/billing/classes/BillingReceiptService",
            "label": "BillingReceiptService"
          },
          {
            "type": "doc",
            "id": "api/billing/classes/BillingService",
            "label": "BillingService"
          }
        ]
      },
      {
        "type": "category",
        "label": "Interfaces",
        "items": [
          {
            "type": "doc",
            "id": "api/billing/interfaces/BillingReceipt",
            "label": "BillingReceipt"
          },
          {
            "type": "doc",
            "id": "api/billing/interfaces/BillingTransaction",
            "label": "BillingTransaction"
          }
        ]
      },
      {
        "type": "category",
        "label": "Enumerations",
        "items": [
          {
            "type": "doc",
            "id": "api/billing/enumerations/PaymentMethod",
            "label": "PaymentMethod"
          },
          {
            "type": "doc",
            "id": "api/billing/enumerations/TransactionStatus",
            "label": "TransactionStatus"
          }
        ]
      }
    ],
    "link": {
      "type": "doc",
      "id": "api/billing/index"
    }
  },
  {
    "type": "category",
    "label": "customer",
    "items": [
      {
        "type": "category",
        "label": "Classes",
        "items": [
          {
            "type": "doc",
            "id": "api/customer/classes/CustomerAccount",
            "label": "CustomerAccount"
          },
          {
            "type": "doc",
            "id": "api/customer/classes/CustomerService",
            "label": "CustomerService"
          }
        ]
      },
      {
        "type": "category",
        "label": "Interfaces",
        "items": [
          {
            "type": "doc",
            "id": "api/customer/interfaces/Customer",
            "label": "Customer"
          },
          {
            "type": "doc",
            "id": "api/customer/interfaces/CustomerBilling",
            "label": "CustomerBilling"
          },
          {
            "type": "doc",
            "id": "api/customer/interfaces/CustomerContact",
            "label": "CustomerContact"
          },
          {
            "type": "doc",
            "id": "api/customer/interfaces/CustomerOrderHistory",
            "label": "CustomerOrderHistory"
          }
        ]
      },
      {
        "type": "category",
        "label": "Enumerations",
        "items": [
          {
            "type": "doc",
            "id": "api/customer/enumerations/CustomerType",
            "label": "CustomerType"
          }
        ]
      }
    ],
    "link": {
      "type": "doc",
      "id": "api/customer/index"
    }
  },
  {
    "type": "category",
    "label": "products",
    "items": [
      {
        "type": "category",
        "label": "Classes",
        "items": [
          {
            "type": "doc",
            "id": "api/products/classes/ProductInventory",
            "label": "ProductInventory"
          },
          {
            "type": "doc",
            "id": "api/products/classes/ProductReviewService",
            "label": "ProductReviewService"
          }
        ]
      },
      {
        "type": "category",
        "label": "Interfaces",
        "items": [
          {
            "type": "doc",
            "id": "api/products/interfaces/Product",
            "label": "Product"
          },
          {
            "type": "doc",
            "id": "api/products/interfaces/ProductDetails",
            "label": "ProductDetails"
          },
          {
            "type": "doc",
            "id": "api/products/interfaces/ProductReview",
            "label": "ProductReview"
          }
        ]
      },
      {
        "type": "category",
        "label": "Enumerations",
        "items": [
          {
            "type": "doc",
            "id": "api/products/enumerations/ProductCategory",
            "label": "ProductCategory"
          }
        ]
      }
    ],
    "link": {
      "type": "doc",
      "id": "api/products/index"
    }
  },
  {
    "type": "category",
    "label": "shipping",
    "items": [
      {
        "type": "category",
        "label": "Classes",
        "items": [
          {
            "type": "doc",
            "id": "api/shipping/classes/ShippingService",
            "label": "ShippingService"
          }
        ]
      },
      {
        "type": "category",
        "label": "Interfaces",
        "items": [
          {
            "type": "doc",
            "id": "api/shipping/interfaces/ShippingRecord",
            "label": "ShippingRecord"
          }
        ]
      }
    ],
    "link": {
      "type": "doc",
      "id": "api/shipping/index"
    }
  },
  {
    "type": "category",
    "label": "utilities",
    "items": [
      {
        "type": "category",
        "label": "Functions",
        "items": [
          {
            "type": "doc",
            "id": "api/utilities/functions/formatCurrency",
            "label": "formatCurrency"
          },
          {
            "type": "doc",
            "id": "api/utilities/functions/generateUniqueId",
            "label": "generateUniqueId"
          },
          {
            "type": "doc",
            "id": "api/utilities/functions/isValidEmail",
            "label": "isValidEmail"
          },
          {
            "type": "doc",
            "id": "api/utilities/functions/shuffleArray",
            "label": "shuffleArray"
          },
          {
            "type": "doc",
            "id": "api/utilities/functions/toTitleCase",
            "label": "toTitleCase"
          },
          {
            "type": "doc",
            "id": "api/utilities/functions/truncateString",
            "label": "truncateString"
          }
        ]
      }
    ],
    "link": {
      "type": "doc",
      "id": "api/utilities/index"
    }
  }
]};
module.exports = typedocSidebar.items;