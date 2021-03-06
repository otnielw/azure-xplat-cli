// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    name: 'Azure Storage DM Dev',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_STORAGE_TEST_TYPE'] = 'LRS';
  process.env['AZURE_RESOURCE_GROUP_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/armclistorageGroup39/providers/Microsoft.Storage/storageAccounts/armclistorageaccount2586/listKeys?api-version=2015-06-15')
  .reply(200, "{\"key1\":\"aYtSHNsTvuHkVh+TfT1wAO30vqK7u6yn9MLm8r4gGk/XoVks6RXswRD0Ea7fYQxeTLC52yraHK4foS042f4uEg==\",\"key2\":\"KZimVl0qaPlG/20hv4AiFRuX13exmTOr6zuhkHCxuNUadkba5NwgoeRysS8lC6B27GsbzojEsFlKzKldOvm3lQ==\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '198',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '30552059-20b5-4767-9b2e-7dd78b355ac9',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '30552059-20b5-4767-9b2e-7dd78b355ac9',
  'x-ms-routing-request-id': 'JAPANEAST:20151019T080935Z:30552059-20b5-4767-9b2e-7dd78b355ac9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 19 Oct 2015 08:09:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/resourceGroups/armclistorageGroup39/providers/Microsoft.Storage/storageAccounts/armclistorageaccount2586/listKeys?api-version=2015-06-15')
  .reply(200, "{\"key1\":\"aYtSHNsTvuHkVh+TfT1wAO30vqK7u6yn9MLm8r4gGk/XoVks6RXswRD0Ea7fYQxeTLC52yraHK4foS042f4uEg==\",\"key2\":\"KZimVl0qaPlG/20hv4AiFRuX13exmTOr6zuhkHCxuNUadkba5NwgoeRysS8lC6B27GsbzojEsFlKzKldOvm3lQ==\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '198',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '30552059-20b5-4767-9b2e-7dd78b355ac9',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '30552059-20b5-4767-9b2e-7dd78b355ac9',
  'x-ms-routing-request-id': 'JAPANEAST:20151019T080935Z:30552059-20b5-4767-9b2e-7dd78b355ac9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 19 Oct 2015 08:09:35 GMT',
  connection: 'close' });
 return result; }]];