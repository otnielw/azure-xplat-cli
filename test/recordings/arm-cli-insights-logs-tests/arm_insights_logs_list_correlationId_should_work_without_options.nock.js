// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'b67f7fec-69fc-4974-9099-a26bd6ffeda3',
    name: 'Monitoring vNext Test Environment Services 02',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringPath(function (path) { return path.slice(0, path.indexOf('&')); })
.get('/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/providers/microsoft.insights/eventtypes/management/values?api-version=2014-04-01')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '12',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'WestUS_90f32ba61d7c4dbcb8d7ff214cfe5830_635651656092673696',
  server: 'Microsoft-IIS/8.5',
  'x-ms-ratelimit-remaining-subscription-reads': '31836',
  'x-ms-correlation-request-id': '0f5f7388-6bd2-45c8-8ce3-7ad6805e911d',
  'x-ms-routing-request-id': 'WESTUS:20150420T222649Z:0f5f7388-6bd2-45c8-8ce3-7ad6805e911d',
  date: 'Mon, 20 Apr 2015 22:26:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringPath(function (path) { return path.slice(0, path.indexOf('&')); })
.get('/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/providers/microsoft.insights/eventtypes/management/values?api-version=2014-04-01')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '12',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'WestUS_90f32ba61d7c4dbcb8d7ff214cfe5830_635651656092673696',
  server: 'Microsoft-IIS/8.5',
  'x-ms-ratelimit-remaining-subscription-reads': '31836',
  'x-ms-correlation-request-id': '0f5f7388-6bd2-45c8-8ce3-7ad6805e911d',
  'x-ms-routing-request-id': 'WESTUS:20150420T222649Z:0f5f7388-6bd2-45c8-8ce3-7ad6805e911d',
  date: 'Mon, 20 Apr 2015 22:26:49 GMT',
  connection: 'close' });
 return result; }]];