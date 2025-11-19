# WalletCardsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**cardNumber** | **string** | Full card number or masked number | [optional] [default to undefined]
**bank** | **string** | Bank name with brand | [optional] [default to undefined]
**network** | **string** |  | [optional] [default to undefined]
**expiryMonth** | **number** |  | [optional] [default to undefined]
**expiryYear** | **number** |  | [optional] [default to undefined]
**color** | **string** | Card color in hex format | [optional] [default to undefined]
**isDefault** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { WalletCardsInner } from './api';

const instance: WalletCardsInner = {
    id,
    name,
    type,
    cardNumber,
    bank,
    network,
    expiryMonth,
    expiryYear,
    color,
    isDefault,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
