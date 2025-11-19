# ScheduledTransfersTransfersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**name** | **string** | Recipient\&#39;s full name | [optional] [default to undefined]
**image** | **string** | URL of the recipient\&#39;s avatar/profile picture (generated from UI Avatars) | [optional] [default to undefined]
**date** | **string** | Scheduled date and time of the transfer | [optional] [default to undefined]
**amount** | **number** | Transfer amount (negative for outgoing) | [optional] [default to undefined]
**currency** | **string** | Currency symbol or code | [optional] [default to undefined]
**status** | **string** | Current status of the scheduled transfer | [optional] [default to undefined]

## Example

```typescript
import { ScheduledTransfersTransfersInner } from './api';

const instance: ScheduledTransfersTransfersInner = {
    id,
    name,
    image,
    date,
    amount,
    currency,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
