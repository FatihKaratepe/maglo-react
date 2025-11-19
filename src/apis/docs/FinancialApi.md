# FinancialApi

All URIs are relative to *https://case.nodelabs.dev/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**financialSummaryGet**](#financialsummaryget) | **GET** /financial/summary | Get financial summary|
|[**financialTransactionsRecentGet**](#financialtransactionsrecentget) | **GET** /financial/transactions/recent | Get recent transactions|
|[**financialTransfersScheduledGet**](#financialtransfersscheduledget) | **GET** /financial/transfers/scheduled | Get scheduled transfers|
|[**financialWalletGet**](#financialwalletget) | **GET** /financial/wallet | Get wallet cards|
|[**financialWorkingCapitalGet**](#financialworkingcapitalget) | **GET** /financial/working-capital | Get working capital data|

# **financialSummaryGet**
> FinancialSummaryGet200Response financialSummaryGet()

Returns total balance, total expenses, and total savings with change percentages.

### Example

```typescript
import {
    FinancialApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FinancialApi(configuration);

const { status, data } = await apiInstance.financialSummaryGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**FinancialSummaryGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Financial summary retrieved successfully. |  -  |
|**401** | Unauthorized - Missing or invalid token. |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **financialTransactionsRecentGet**
> FinancialTransactionsRecentGet200Response financialTransactionsRecentGet()

Returns list of recent financial transactions.

### Example

```typescript
import {
    FinancialApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FinancialApi(configuration);

let limit: number; //Number of transactions to return (default 20) (optional) (default to 20)

const { status, data } = await apiInstance.financialTransactionsRecentGet(
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Number of transactions to return (default 20) | (optional) defaults to 20|


### Return type

**FinancialTransactionsRecentGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Recent transactions retrieved successfully. |  -  |
|**401** | Unauthorized - Missing or invalid token. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **financialTransfersScheduledGet**
> FinancialTransfersScheduledGet200Response financialTransfersScheduledGet()

Returns list of upcoming scheduled transfers with recipient details.

### Example

```typescript
import {
    FinancialApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FinancialApi(configuration);

const { status, data } = await apiInstance.financialTransfersScheduledGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**FinancialTransfersScheduledGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Scheduled transfers retrieved successfully. |  -  |
|**401** | Unauthorized - Missing or invalid token. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **financialWalletGet**
> FinancialWalletGet200Response financialWalletGet()

Returns list of credit/debit cards.

### Example

```typescript
import {
    FinancialApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FinancialApi(configuration);

const { status, data } = await apiInstance.financialWalletGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**FinancialWalletGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Wallet cards retrieved successfully. |  -  |
|**401** | Unauthorized - Missing or invalid token. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **financialWorkingCapitalGet**
> FinancialWorkingCapitalGet200Response financialWorkingCapitalGet()

Returns income and expense data for the last 6 months for chart visualization.

### Example

```typescript
import {
    FinancialApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FinancialApi(configuration);

const { status, data } = await apiInstance.financialWorkingCapitalGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**FinancialWorkingCapitalGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Working capital data retrieved successfully. |  -  |
|**401** | Unauthorized - Missing or invalid token. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

