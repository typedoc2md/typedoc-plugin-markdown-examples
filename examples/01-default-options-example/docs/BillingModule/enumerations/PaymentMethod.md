[**Default Options Example**](../../README.md) • **Docs**

***

[Default Options Example](../../modules.md) / [BillingModule](../README.md) / PaymentMethod

# Enumeration: PaymentMethod

Enum representing different types of payment methods.
These are used to specify the payment mechanism chosen by a customer.

## Enumeration Members

### BankTransfer

> **BankTransfer**: `"Bank Transfer"`

Payment via direct bank transfer. Used typically for larger transactions or where credit cards and PayPal are not viable.

#### Source

[billing.ts:24](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/38eb87a4b515962ebbfbbc47ab56d2442dce4b6d/examples/src/billing.ts#L24)

***

### CreditCard

> **CreditCard**: `"Credit Card"`

Payment through credit card.

#### Source

[billing.ts:18](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/38eb87a4b515962ebbfbbc47ab56d2442dce4b6d/examples/src/billing.ts#L18)

***

### PayPal

> **PayPal**: `"PayPal"`

Payment through PayPal. Ideal for users who prefer not to directly use their credit card details.

#### Source

[billing.ts:21](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/38eb87a4b515962ebbfbbc47ab56d2442dce4b6d/examples/src/billing.ts#L21)
