# UserResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The user\&#39;s unique identifier. | [optional] [default to undefined]
**fullName** | **string** | The user\&#39;s full name. | [optional] [default to undefined]
**email** | **string** | The user\&#39;s email address. | [optional] [default to undefined]
**role** | **string** | The user\&#39;s role (automatically set to \&quot;user\&quot; on registration, not sent in request). | [optional] [default to undefined]
**isActive** | **boolean** | Whether the user\&#39;s account is active. | [optional] [default to undefined]
**lastLoginAt** | **string** | The date and time of the user\&#39;s last login. | [optional] [default to undefined]
**lastLoginIP** | **string** | The IP address of the user\&#39;s last login. | [optional] [default to undefined]
**createdAt** | **string** | The date the user was created. | [optional] [default to undefined]
**updatedAt** | **string** | The date the user was last updated. | [optional] [default to undefined]

## Example

```typescript
import { UserResponse } from './api';

const instance: UserResponse = {
    id,
    fullName,
    email,
    role,
    isActive,
    lastLoginAt,
    lastLoginIP,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
