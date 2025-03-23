[**dummy-typescript-api**](../../README.md)

***

[dummy-typescript-api](../../README.md) / [billing](../README.md) / PaymentMethod

# Enumeration: PaymentMethod

Defined in: [billing.ts:15](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L15)

Enum representing different types of payment methods.
These are used to specify the payment mechanism chosen by a customer.

## Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="banktransfer"></a> `BankTransfer` | `"Bank Transfer"` | Payment via direct bank transfer. Used typically for larger transactions or where credit cards and PayPal are not viable. | [billing.ts:23](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L23) |
| <a id="creditcard"></a> `CreditCard` | `"Credit Card"` | Payment through credit card. | [billing.ts:17](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L17) |
| <a id="paypal"></a> `PayPal` | `"PayPal"` | Payment through PayPal. Ideal for users who prefer not to directly use their credit card details. | [billing.ts:20](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L20) |
