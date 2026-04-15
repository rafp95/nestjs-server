# UserAdminApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usersAdminControllerAddRole**](#usersadmincontrolleraddrole) | **POST** /users-admin/user/add-role | |
|[**usersAdminControllerRemoveRole**](#usersadmincontrollerremoverole) | **DELETE** /users-admin/user/remove-role | |
|[**usersAdminControllerSearch**](#usersadmincontrollersearch) | **GET** /users-admin/search | |

# **usersAdminControllerAddRole**
> usersAdminControllerAddRole(addRoleDto)


### Example

```typescript
import {
    UserAdminApi,
    Configuration,
    AddRoleDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UserAdminApi(configuration);

let addRoleDto: AddRoleDto; //

const { status, data } = await apiInstance.usersAdminControllerAddRole(
    addRoleDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addRoleDto** | **AddRoleDto**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersAdminControllerRemoveRole**
> usersAdminControllerRemoveRole(addRoleDto)


### Example

```typescript
import {
    UserAdminApi,
    Configuration,
    AddRoleDto
} from './api';

const configuration = new Configuration();
const apiInstance = new UserAdminApi(configuration);

let addRoleDto: AddRoleDto; //

const { status, data } = await apiInstance.usersAdminControllerRemoveRole(
    addRoleDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addRoleDto** | **AddRoleDto**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersAdminControllerSearch**
> object usersAdminControllerSearch()


### Example

```typescript
import {
    UserAdminApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserAdminApi(configuration);

const { status, data } = await apiInstance.usersAdminControllerSearch();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**object**

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

