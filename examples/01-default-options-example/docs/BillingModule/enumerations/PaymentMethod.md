**typedoc-plugin-markdown-examples** • [Readme](../../README.md) \| [API](../../modules.md)

***

[typedoc-plugin-markdown-examples](../../README.md) / [BillingModule](../README.md) / PaymentMethod

# Enumeration: PaymentMethod

Enum representing different types of payment methods.
These are used to specify the payment mechanism chosen by a customer.

## Enumeration Members

### BankTransfer

> **BankTransfer**: `"Bank Transfer"`

Payment via direct bank transfer. Used typically for larger transactions or where credit cards and PayPal are not viable.

#### Source

billing.ts:24

***

### CreditCard

> **CreditCard**: `"Credit Card"`

Payment through credit card.

#### Source

billing.ts:18

***

### PayPal

> **PayPal**: `"PayPal"`

Payment through PayPal. Ideal for users who prefer not to directly use their credit card details.

#### Source

billing.ts:21
