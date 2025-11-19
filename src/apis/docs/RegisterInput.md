# RegisterInput

Note: The role field is NOT included in registration. All new users are automatically assigned the \"user\" role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fullName** | **string** | The user\&#39;s full name. | [default to undefined]
**email** | **string** | The user\&#39;s email address. | [default to undefined]
**password** | **string** | The user\&#39;s password (must be at least 8 characters, with uppercase, lowercase, and a number). | [default to undefined]

## Example

```typescript
import { RegisterInput } from './api';

const instance: RegisterInput = {
    fullName,
    email,
    password,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
