[本地化示例](../README.md) / User

# 类: User

## 实现

- [`UserProfile`](../interfaces/UserProfile.md)

## 构造函数

### new User()

> **new User**(`id`, `name`, `email`, `address`, `age`?): [`User`](User.md)

#### 参数

• **id**: `number`

• **name**: `string`

• **email**: `string`

• **address**

• **address.city**: `string`

• **address.country?**: `string`

• **address.street?**: `string`

• **age?**: `number`

#### 返回

[`User`](User.md)

#### 定义于

index.ts:83

## 特性

### address

> **address**: `object`

#### city

> **city**: `string`

#### country

> **country**: `string`

#### street

> **street**: `string`

#### 实现了

[`UserProfile`](../interfaces/UserProfile.md).[`address`](../interfaces/UserProfile.md#address)

#### 定义于

index.ts:77

***

### age?

> `optional` **age**: `number`

#### 实现了

[`UserProfile`](../interfaces/UserProfile.md).[`age`](../interfaces/UserProfile.md#age)

#### 定义于

index.ts:76

***

### email

> **email**: `string`

#### 实现了

[`UserProfile`](../interfaces/UserProfile.md).[`email`](../interfaces/UserProfile.md#email)

#### 定义于

index.ts:75

***

### id

> **id**: `number`

#### 实现了

[`UserProfile`](../interfaces/UserProfile.md).[`id`](../interfaces/UserProfile.md#id)

#### 定义于

index.ts:73

***

### name

> **name**: `string`

#### 实现了

[`UserProfile`](../interfaces/UserProfile.md).[`name`](../interfaces/UserProfile.md#name)

#### 定义于

index.ts:74

## 方法

### displayInfo()

> **displayInfo**(): `string`

#### 返回

`string`

#### 实现了

[`UserProfile`](../interfaces/UserProfile.md).[`displayInfo`](../interfaces/UserProfile.md#displayinfo)

#### 定义于

index.ts:99

***

### isAdult()?

> `optional` **isAdult**(): `boolean`

#### 返回

`boolean`

#### 实现了

[`UserProfile`](../interfaces/UserProfile.md).[`isAdult`](../interfaces/UserProfile.md#isadult)

#### 定义于

index.ts:108

***

### updateEmail()

> **updateEmail**(`newEmail`): `void`

#### 参数

• **newEmail**: `string`

#### 返回

`void`

#### 实现了

[`UserProfile`](../interfaces/UserProfile.md).[`updateEmail`](../interfaces/UserProfile.md#updateemail)

#### 定义于

index.ts:103
