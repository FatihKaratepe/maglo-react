# RecentTransactionsTransactionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**name** | **string** | Transaction name (product/service name) | [optional] [default to undefined]
**business** | **string** | Business/Company name | [optional] [default to undefined]
**image** | **string** | Business/Company logo URL | [optional] [default to undefined]
**type** | **string** | Transaction category | [optional] [default to undefined]
**amount** | **number** | Transaction amount (positive for income, negative for expense) | [optional] [default to undefined]
**currency** | **string** |  | [optional] [default to undefined]
**date** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { RecentTransactionsTransactionsInner } from './api';

const instance: RecentTransactionsTransactionsInner = {
    id,
    name,
    business,
    image,
    type,
    amount,
    currency,
    date,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
