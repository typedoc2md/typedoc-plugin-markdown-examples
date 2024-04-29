[typedoc-plugin-markdown-examples](../../README.md) • Docs

***

[typedoc-plugin-markdown-examples](../../modules.md) / [BillingModule](../README.md) / PaymentMethod

# Enumeration: PaymentMethod

Enum representing different types of payment methods.
These are used to specify the payment mechanism chosen by a customer.

## Enumeration Members

### BankTransfer

> **BankTransfer**: `"Bank Transfer"`

Payment via direct bank transfer. Used typically for larger transactions or where credit cards and PayPal are not viable.

#### Source

[billing.ts:24](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/bacb1c2264a9626cba5f9e7959f4fc899171a745/examples/src/billing.ts#L24)

***

### CreditCard

> **CreditCard**: `"Credit Card"`

Payment through credit card.

#### Source

[billing.ts:18](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/bacb1c2264a9626cba5f9e7959f4fc899171a745/examples/src/billing.ts#L18)

***

### PayPal

> **PayPal**: `"PayPal"`

Payment through PayPal. Ideal for users who prefer not to directly use their credit card details.

#### Source

[billing.ts:21](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/bacb1c2264a9626cba5f9e7959f4fc899171a745/examples/src/billing.ts#L21)
