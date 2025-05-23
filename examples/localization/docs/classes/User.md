[本地化示例](../README.md) / User

# 类: User

定义于: [index.ts:72](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/examples/localization/src/index.ts#L72)

## 实现

- [`UserProfile`](../interfaces/UserProfile.md)

## 构造函数

### 构造函数

> **new User**(`id`, `name`, `email`, `address`, `age?`): `User`

定义于: [index.ts:83](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/examples/localization/src/index.ts#L83)

#### 参数

##### id

`number`

##### name

`string`

##### email

`string`

##### address

###### city

`string`

###### country

`string`

###### street

`string`

##### age?

`number`

#### 返回

`User`

## 属性

### address

> **address**: `object`

定义于: [index.ts:77](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/examples/localization/src/index.ts#L77)

#### city

> **city**: `string`

#### country

> **country**: `string`

#### street

> **street**: `string`

#### 实现了

[`UserProfile`](../interfaces/UserProfile.md).[`address`](../interfaces/UserProfile.md#address)

***

### age?

> `optional` **age**: `number`

定义于: [index.ts:76](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/examples/localization/src/index.ts#L76)

#### 实现了

[`UserProfile`](../interfaces/UserProfile.md).[`age`](../interfaces/UserProfile.md#age)

***

### email

> **email**: `string`

定义于: [index.ts:75](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/examples/localization/src/index.ts#L75)

#### 实现了

[`UserProfile`](../interfaces/UserProfile.md).[`email`](../interfaces/UserProfile.md#email)

***

### id

> **id**: `number`

定义于: [index.ts:73](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/examples/localization/src/index.ts#L73)

#### 实现了

[`UserProfile`](../interfaces/UserProfile.md).[`id`](../interfaces/UserProfile.md#id)

***

### name

> **name**: `string`

定义于: [index.ts:74](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/examples/localization/src/index.ts#L74)

#### 实现了

[`UserProfile`](../interfaces/UserProfile.md).[`name`](../interfaces/UserProfile.md#name)

## 方法

### displayInfo()

> **displayInfo**(): `string`

定义于: [index.ts:99](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/examples/localization/src/index.ts#L99)

#### 返回

`string`

#### 实现了

[`UserProfile`](../interfaces/UserProfile.md).[`displayInfo`](../interfaces/UserProfile.md#displayinfo)

***

### isAdult()?

> `optional` **isAdult**(): `boolean`

定义于: [index.ts:108](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/examples/localization/src/index.ts#L108)

#### 返回

`boolean`

#### 实现了

[`UserProfile`](../interfaces/UserProfile.md).[`isAdult`](../interfaces/UserProfile.md#isadult)

***

### updateEmail()

> **updateEmail**(`newEmail`): `void`

定义于: [index.ts:103](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/examples/localization/src/index.ts#L103)

#### 参数

##### newEmail

`string`

#### 返回

`void`

#### 实现了

[`UserProfile`](../interfaces/UserProfile.md).[`updateEmail`](../interfaces/UserProfile.md#updateemail)
