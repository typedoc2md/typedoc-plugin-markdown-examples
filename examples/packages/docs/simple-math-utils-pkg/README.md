[packages-example](../README.md) / simple-math-utils-pkg

# simple-math-utils-pkg

This package provides simple arithmetic operations such as addition, subtraction,
multiplication, and division. It is intended for use as a utility module in larger applications that require
basic mathematical operations. The functions are type-safe and throw errors for invalid operations like division by zero.

## Functions

### add()

> **add**(`a`, `b`): `number`

Adds two numbers.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `a` | `number` | The first number to add. |
| `b` | `number` | The second number to add. |

#### Returns

`number`

The sum of `a` and `b`.

#### Defined in

[index.ts:15](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/examples/packages/packages/simple-math-utils/index.ts#L15)

***

### divide()

> **divide**(`a`, `b`): `number`

Divides the first number by the second.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `a` | `number` | The numerator. |
| `b` | `number` | The denominator. Must not be zero. |

#### Returns

`number`

The quotient of `a` and `b`.

#### Throws

Division by zero is not allowed.

#### Defined in

[index.ts:46](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/examples/packages/packages/simple-math-utils/index.ts#L46)

***

### multiply()

> **multiply**(`a`, `b`): `number`

Multiplies two numbers.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `a` | `number` | The first number to multiply. |
| `b` | `number` | The second number to multiply. |

#### Returns

`number`

The product of `a` and `b`.

#### Defined in

[index.ts:35](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/examples/packages/packages/simple-math-utils/index.ts#L35)

***

### subtract()

> **subtract**(`a`, `b`): `number`

Subtracts the second number from the first.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `a` | `number` | The number from which to subtract. |
| `b` | `number` | The number to subtract. |

#### Returns

`number`

The difference of `a` and `b`.

#### Defined in

[index.ts:25](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/examples/packages/packages/simple-math-utils/index.ts#L25)
