# ContactsApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**contactsControllerCreate**](#contactscontrollercreate) | **POST** /contacts | |
|[**contactsControllerFindAll**](#contactscontrollerfindall) | **GET** /contacts | |
|[**contactsControllerFindOne**](#contactscontrollerfindone) | **GET** /contacts/{id} | |
|[**contactsControllerRemove**](#contactscontrollerremove) | **DELETE** /contacts/remove/{id}/active | |
|[**contactsControllerUpdate**](#contactscontrollerupdate) | **PATCH** /contacts/{id} | |

# **contactsControllerCreate**
> CreateContactResponse contactsControllerCreate(createContactDto)


### Example

```typescript
import {
    ContactsApi,
    Configuration,
    CreateContactDto
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactsApi(configuration);

let createContactDto: CreateContactDto; //

const { status, data } = await apiInstance.contactsControllerCreate(
    createContactDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createContactDto** | **CreateContactDto**|  | |


### Return type

**CreateContactResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **contactsControllerFindAll**
> Array<Contact> contactsControllerFindAll()


### Example

```typescript
import {
    ContactsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactsApi(configuration);

let pageIndex: number; // (optional) (default to 0)
let pageSize: number; // (optional) (default to 1)
let sortBy: string; // (optional) (default to 'email')
let sortDir: 'asc' | 'desc'; // (optional) (default to 'asc')
let createdAt: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.contactsControllerFindAll(
    pageIndex,
    pageSize,
    sortBy,
    sortDir,
    createdAt
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageIndex** | [**number**] |  | (optional) defaults to 0|
| **pageSize** | [**number**] |  | (optional) defaults to 1|
| **sortBy** | [**string**] |  | (optional) defaults to 'email'|
| **sortDir** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** |  | (optional) defaults to 'asc'|
| **createdAt** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<Contact>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **contactsControllerFindOne**
> Contact contactsControllerFindOne()


### Example

```typescript
import {
    ContactsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.contactsControllerFindOne(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Contact**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **contactsControllerRemove**
> Contact contactsControllerRemove()


### Example

```typescript
import {
    ContactsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactsApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.contactsControllerRemove(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Contact**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **contactsControllerUpdate**
> Contact contactsControllerUpdate(updateContactDto)


### Example

```typescript
import {
    ContactsApi,
    Configuration,
    UpdateContactDto
} from './api';

const configuration = new Configuration();
const apiInstance = new ContactsApi(configuration);

let id: number; // (default to undefined)
let updateContactDto: UpdateContactDto; //

const { status, data } = await apiInstance.contactsControllerUpdate(
    id,
    updateContactDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateContactDto** | **UpdateContactDto**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Contact**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

