[**Default Options Example**](../../README.md)

***

[Default Options Example](../../modules.md) / [billing](../README.md) / PaymentMethod

# Enumeration: PaymentMethod

Defined in: [billing.ts:15](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L15)

Enum representing different types of payment methods.
These are used to specify the payment mechanism chosen by a customer.

## Enumeration Members

### BankTransfer

> **BankTransfer**: `"Bank Transfer"`

Defined in: [billing.ts:23](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L23)

Payment via direct bank transfer. Used typically for larger transactions or where credit cards and PayPal are not viable.

***

### CreditCard

> **CreditCard**: `"Credit Card"`

Defined in: [billing.ts:17](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L17)

Payment through credit card.

***

### PayPal

> **PayPal**: `"PayPal"`

Defined in: [billing.ts:20](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L20)

Payment through PayPal. Ideal for users who prefer not to directly use their credit card details.
