// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate5686/providers/Microsoft.Compute/virtualMachines/xplatvm?api-version=2015-06-15')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"1bbf7e1c-4763-4c7f-b4c5-32a8e31689f3\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"clif977ecb5495eb0ea-os-1449163084754\",\r\n        \"createOption\": \"FromImage\",\r\n        \"image\": {\r\n          \"uri\": \"https://xplatteststorage13770.blob.core.windows.net/system/Microsoft.Compute/Images/vhds/xplatvm-osDisk.fb346360-e1b7-4f22-8e56-a8fa5bc91ce8.vhd\"\r\n        },\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage13770.blob.core.windows.net/xplatteststoragecnt17324/clif977ecb5495eb0ea-os-1449163084754.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\r\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\r\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\r\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\r\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\r\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\r\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\r\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\r\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\r\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\r\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\r\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\r\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\r\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\r\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\r\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\r\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\r\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\r\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\r\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\r\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\r\\nHhHqofKrj938HHlBNpC5/LVh3w==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"properties\":{},\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate5686/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatteststorage13770.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate5686/providers/Microsoft.Compute/virtualMachines/xplatvm\",\r\n  \"name\": \"xplatvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3368',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': '30056731-ed31-43a6-907f-70cffd47b5a0',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '359ea4a3-4e8c-40f0-8099-29030eb96dad',
  'x-ms-routing-request-id': 'WESTUS:20151203T173514Z:359ea4a3-4e8c-40f0-8099-29030eb96dad',
  date: 'Thu, 03 Dec 2015 17:35:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate5686/providers/Microsoft.Compute/virtualMachines/xplatvm?api-version=2015-06-15')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"1bbf7e1c-4763-4c7f-b4c5-32a8e31689f3\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"clif977ecb5495eb0ea-os-1449163084754\",\r\n        \"createOption\": \"FromImage\",\r\n        \"image\": {\r\n          \"uri\": \"https://xplatteststorage13770.blob.core.windows.net/system/Microsoft.Compute/Images/vhds/xplatvm-osDisk.fb346360-e1b7-4f22-8e56-a8fa5bc91ce8.vhd\"\r\n        },\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage13770.blob.core.windows.net/xplatteststoragecnt17324/clif977ecb5495eb0ea-os-1449163084754.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\r\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\r\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\r\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\r\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\r\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\r\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\r\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\r\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\r\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\r\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\r\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\r\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\r\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\r\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\r\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\r\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\r\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\r\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\r\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\r\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\r\\nHhHqofKrj938HHlBNpC5/LVh3w==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"properties\":{},\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate5686/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatteststorage13770.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate5686/providers/Microsoft.Compute/virtualMachines/xplatvm\",\r\n  \"name\": \"xplatvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3368',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': '30056731-ed31-43a6-907f-70cffd47b5a0',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '359ea4a3-4e8c-40f0-8099-29030eb96dad',
  'x-ms-routing-request-id': 'WESTUS:20151203T173514Z:359ea4a3-4e8c-40f0-8099-29030eb96dad',
  date: 'Thu, 03 Dec 2015 17:35:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate5686/providers/Microsoft.Storage/storageAccounts/xplatteststorage13770/listKeys?api-version=2015-06-15')
  .reply(200, "{\"key1\":\"wXLypVV9l2Pc6eM0TR5C+zchKL/oYj0kb2xvgPdJNPGKfE5Uj1jpNWKrH9BtDu7LMNaszhInBbE6NJmyeeXB0w==\",\"key2\":\"cKE3I4ujSUFiF/BhlgGOK4T4SDUWJk4CniqP6Tkl0RTJTd5XWde55gDEb441RIM3530iWEAszNqWoPa87hoH6g==\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '198',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '23a37aab-9490-4725-913d-d53fdbd338a8',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': '23a37aab-9490-4725-913d-d53fdbd338a8',
  'x-ms-routing-request-id': 'WESTUS:20151203T173514Z:23a37aab-9490-4725-913d-d53fdbd338a8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 03 Dec 2015 17:35:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate5686/providers/Microsoft.Storage/storageAccounts/xplatteststorage13770/listKeys?api-version=2015-06-15')
  .reply(200, "{\"key1\":\"wXLypVV9l2Pc6eM0TR5C+zchKL/oYj0kb2xvgPdJNPGKfE5Uj1jpNWKrH9BtDu7LMNaszhInBbE6NJmyeeXB0w==\",\"key2\":\"cKE3I4ujSUFiF/BhlgGOK4T4SDUWJk4CniqP6Tkl0RTJTd5XWde55gDEb441RIM3530iWEAszNqWoPa87hoH6g==\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '198',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '23a37aab-9490-4725-913d-d53fdbd338a8',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': '23a37aab-9490-4725-913d-d53fdbd338a8',
  'x-ms-routing-request-id': 'WESTUS:20151203T173514Z:23a37aab-9490-4725-913d-d53fdbd338a8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 03 Dec 2015 17:35:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate5686/providers/Microsoft.Compute/virtualMachines/xplatvm/extensions/LinuxDiagnostic?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"properties\": {\r\n    \"publisher\": \"Microsoft.OSTCExtensions\",\r\n    \"type\": \"LinuxDiagnostic\",\r\n    \"typeHandlerVersion\": \"2.0\",\r\n    \"autoUpgradeMinorVersion\": true,\r\n    \"provisioningState\": \"Creating\"\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate5686/providers/Microsoft.Compute/virtualMachines/xplatvm/extensions/LinuxDiagnostic\",\r\n  \"name\": \"LinuxDiagnostic\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '517',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/2406aaf3-4399-4dc0-8c62-b99e951bfa14?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': '2406aaf3-4399-4dc0-8c62-b99e951bfa14',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '06dc5695-78bf-4dbd-ab67-1d8e0ced7dc1',
  'x-ms-routing-request-id': 'WESTUS:20151203T173519Z:06dc5695-78bf-4dbd-ab67-1d8e0ced7dc1',
  date: 'Thu, 03 Dec 2015 17:35:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate5686/providers/Microsoft.Compute/virtualMachines/xplatvm/extensions/LinuxDiagnostic?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"properties\": {\r\n    \"publisher\": \"Microsoft.OSTCExtensions\",\r\n    \"type\": \"LinuxDiagnostic\",\r\n    \"typeHandlerVersion\": \"2.0\",\r\n    \"autoUpgradeMinorVersion\": true,\r\n    \"provisioningState\": \"Creating\"\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate5686/providers/Microsoft.Compute/virtualMachines/xplatvm/extensions/LinuxDiagnostic\",\r\n  \"name\": \"LinuxDiagnostic\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '517',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/2406aaf3-4399-4dc0-8c62-b99e951bfa14?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': '2406aaf3-4399-4dc0-8c62-b99e951bfa14',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '06dc5695-78bf-4dbd-ab67-1d8e0ced7dc1',
  'x-ms-routing-request-id': 'WESTUS:20151203T173519Z:06dc5695-78bf-4dbd-ab67-1d8e0ced7dc1',
  date: 'Thu, 03 Dec 2015 17:35:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/2406aaf3-4399-4dc0-8c62-b99e951bfa14?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"2406aaf3-4399-4dc0-8c62-b99e951bfa14\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-12-03T17:35:20.5696509+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': 'cdb64faa-71ea-4604-8001-715c2e4a825f',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'bcb3eaa1-adbe-4886-ae2f-fe559bb918ba',
  'x-ms-routing-request-id': 'WESTUS:20151203T173550Z:bcb3eaa1-adbe-4886-ae2f-fe559bb918ba',
  date: 'Thu, 03 Dec 2015 17:35:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/2406aaf3-4399-4dc0-8c62-b99e951bfa14?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"2406aaf3-4399-4dc0-8c62-b99e951bfa14\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-12-03T17:35:20.5696509+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': 'cdb64faa-71ea-4604-8001-715c2e4a825f',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'bcb3eaa1-adbe-4886-ae2f-fe559bb918ba',
  'x-ms-routing-request-id': 'WESTUS:20151203T173550Z:bcb3eaa1-adbe-4886-ae2f-fe559bb918ba',
  date: 'Thu, 03 Dec 2015 17:35:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/2406aaf3-4399-4dc0-8c62-b99e951bfa14?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"2406aaf3-4399-4dc0-8c62-b99e951bfa14\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-12-03T17:35:20.5696509+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': '1f6f6a30-873a-4b04-931f-3d63be457a5b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '981388d4-cdd7-4ce5-8edb-14d46e0d0544',
  'x-ms-routing-request-id': 'WESTUS:20151203T173621Z:981388d4-cdd7-4ce5-8edb-14d46e0d0544',
  date: 'Thu, 03 Dec 2015 17:36:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/2406aaf3-4399-4dc0-8c62-b99e951bfa14?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"2406aaf3-4399-4dc0-8c62-b99e951bfa14\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-12-03T17:35:20.5696509+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': '1f6f6a30-873a-4b04-931f-3d63be457a5b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '981388d4-cdd7-4ce5-8edb-14d46e0d0544',
  'x-ms-routing-request-id': 'WESTUS:20151203T173621Z:981388d4-cdd7-4ce5-8edb-14d46e0d0544',
  date: 'Thu, 03 Dec 2015 17:36:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/2406aaf3-4399-4dc0-8c62-b99e951bfa14?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"2406aaf3-4399-4dc0-8c62-b99e951bfa14\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2015-12-03T17:35:20.5696509+00:00\",\r\n  \"endTime\": \"2015-12-03T17:36:43.7447238+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': '5786fa44-7d6c-49ce-b79b-a620a1bce07f',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'c92f293d-7ded-4332-9c96-27fa66857ed5',
  'x-ms-routing-request-id': 'WESTUS:20151203T173652Z:c92f293d-7ded-4332-9c96-27fa66857ed5',
  date: 'Thu, 03 Dec 2015 17:36:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/2406aaf3-4399-4dc0-8c62-b99e951bfa14?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"2406aaf3-4399-4dc0-8c62-b99e951bfa14\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2015-12-03T17:35:20.5696509+00:00\",\r\n  \"endTime\": \"2015-12-03T17:36:43.7447238+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_130917730403641735',
  'x-ms-request-id': '5786fa44-7d6c-49ce-b79b-a620a1bce07f',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'c92f293d-7ded-4332-9c96-27fa66857ed5',
  'x-ms-routing-request-id': 'WESTUS:20151203T173652Z:c92f293d-7ded-4332-9c96-27fa66857ed5',
  date: 'Thu, 03 Dec 2015 17:36:52 GMT',
  connection: 'close' });
 return result; }]];