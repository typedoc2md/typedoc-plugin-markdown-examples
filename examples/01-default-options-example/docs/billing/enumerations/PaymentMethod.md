[**Default Options Example**](../../README.md) • **Docs**

***

[Default Options Example](../../modules.md) / [billing](../README.md) / PaymentMethod

# Enumeration: PaymentMethod

Enum representing different types of payment methods.
These are used to specify the payment mechanism chosen by a customer.

## Enumeration Members

### BankTransfer

> **BankTransfer**: `"Bank Transfer"`

Payment via direct bank transfer. Used typically for larger transactions or where credit cards and PayPal are not viable.

#### Defined in

[billing.ts:23](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/dummy-api/src/billing.ts#L23)

***

### CreditCard

> **CreditCard**: `"Credit Card"`

Payment through credit card.

#### Defined in

[billing.ts:17](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/dummy-api/src/billing.ts#L17)

***

### PayPal

> **PayPal**: `"PayPal"`

Payment through PayPal. Ideal for users who prefer not to directly use their credit card details.

#### Defined in

[billing.ts:20](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/dummy-api/src/billing.ts#L20)
