# UserApi

All URIs are relative to *https://case.nodelabs.dev/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usersLoginPost**](#usersloginpost) | **POST** /users/login | Authenticate a user|
|[**usersLogoutPost**](#userslogoutpost) | **POST** /users/logout | Log out the user|
|[**usersProfileGet**](#usersprofileget) | **GET** /users/profile | Get current user\&#39;s profile|
|[**usersRefreshTokenPost**](#usersrefreshtokenpost) | **POST** /users/refresh-token | Refresh the access token|
|[**usersRegisterPost**](#usersregisterpost) | **POST** /users/register | Register a new user|

# **usersLoginPost**
> UsersLoginPost200Response usersLoginPost(loginInput)

Logs in a user and returns an access token and a refresh token (in a cookie).

### Example

```typescript
import {
    UserApi,
    Configuration,
    LoginInput
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let loginInput: LoginInput; //

const { status, data } = await apiInstance.usersLoginPost(
    loginInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loginInput** | **LoginInput**|  | |


### Return type

**UsersLoginPost200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Login successful. |  -  |
|**400** | Bad Request - Missing fields |  -  |
|**401** | Unauthorized - Invalid credentials. |  -  |
|**403** | Forbidden - Account deactivated |  -  |
|**429** | Too Many Requests - Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersLogoutPost**
> usersLogoutPost()

Clears the refresh token cookie, effectively logging the user out.

### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

const { status, data } = await apiInstance.usersLogoutPost();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Logged out successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersProfileGet**
> UserResponse usersProfileGet()

Retrieves the profile information of the currently authenticated user.

### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

const { status, data } = await apiInstance.usersProfileGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**UserResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User profile retrieved successfully. |  -  |
|**401** | Unauthorized - Missing or invalid token. |  -  |
|**404** | Not Found - User not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersRefreshTokenPost**
> UsersRefreshTokenPost200Response usersRefreshTokenPost()

Uses the httpOnly refresh token cookie to issue a new access token.

### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

const { status, data } = await apiInstance.usersRefreshTokenPost();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**UsersRefreshTokenPost200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Access token refreshed. |  -  |
|**401** | Unauthorized - Invalid or missing refresh token. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersRegisterPost**
> UsersRegisterPost201Response usersRegisterPost(registerInput)

Creates a new user account with role automatically set to \"user\".

### Example

```typescript
import {
    UserApi,
    Configuration,
    RegisterInput
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let registerInput: RegisterInput; //

const { status, data } = await apiInstance.usersRegisterPost(
    registerInput
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerInput** | **RegisterInput**|  | |


### Return type

**UsersRegisterPost201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | User registered successfully. |  -  |
|**409** | Conflict - User with that email already exists. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

