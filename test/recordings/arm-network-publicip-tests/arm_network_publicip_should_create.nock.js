// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['website'],
    registeredResourceNamespaces: ['microsoft.insights', 'successbricks.cleardb'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/microsoft.network/publicIPAddresses/armpublicipnew4401/?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '435c2253-1d35-4d6a-867f-41974433a108',
  'x-ms-correlation-request-id': '435c2253-1d35-4d6a-867f-41974433a108',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150417T184846Z:435c2253-1d35-4d6a-867f-41974433a108',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 17 Apr 2015 18:48:45 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/microsoft.network/publicIPAddresses/armpublicipnew4401/?api-version=2014-12-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '435c2253-1d35-4d6a-867f-41974433a108',
  'x-ms-correlation-request-id': '435c2253-1d35-4d6a-867f-41974433a108',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150417T184846Z:435c2253-1d35-4d6a-867f-41974433a108',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 17 Apr 2015 18:48:45 GMT',
  connection: 'close',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/microsoft.network/publicIPAddresses/armpublicipnew4401/?api-version=2014-12-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"armpublicipnew4401\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew4401\",\r\n  \"etag\": \"W/\\\"ee0a2953-8630-4b71-aa80-c202c04944f8\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip19897\",\r\n      \"fqdn\": \"dnstestpubip19897.southeastasia.cloudapp.azure.com.\",\r\n      \"reverseFqdn\": \"dnstestpubip2386.southeastasia.cloudapp.azure.com.\"\r\n    }\r\n  },\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '649',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'b904f2da-5358-4148-8ab0-1b9146e7250a',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/southeastasia/operations/b904f2da-5358-4148-8ab0-1b9146e7250a?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1162',
  'x-ms-correlation-request-id': '8511e477-5b52-4eca-aacf-62d31e4db474',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150417T184847Z:8511e477-5b52-4eca-aacf-62d31e4db474',
  date: 'Fri, 17 Apr 2015 18:48:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/microsoft.network/publicIPAddresses/armpublicipnew4401/?api-version=2014-12-01-preview', '*')
  .reply(201, "{\r\n  \"name\": \"armpublicipnew4401\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew4401\",\r\n  \"etag\": \"W/\\\"ee0a2953-8630-4b71-aa80-c202c04944f8\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip19897\",\r\n      \"fqdn\": \"dnstestpubip19897.southeastasia.cloudapp.azure.com.\",\r\n      \"reverseFqdn\": \"dnstestpubip2386.southeastasia.cloudapp.azure.com.\"\r\n    }\r\n  },\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '649',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'b904f2da-5358-4148-8ab0-1b9146e7250a',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/southeastasia/operations/b904f2da-5358-4148-8ab0-1b9146e7250a?api-version=2014-12-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1162',
  'x-ms-correlation-request-id': '8511e477-5b52-4eca-aacf-62d31e4db474',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150417T184847Z:8511e477-5b52-4eca-aacf-62d31e4db474',
  date: 'Fri, 17 Apr 2015 18:48:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/southeastasia/operations/b904f2da-5358-4148-8ab0-1b9146e7250a?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2ace8bb4-eca5-471e-a74e-89ab82d0180c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31895',
  'x-ms-correlation-request-id': 'b3e180c8-82ce-4b1c-a359-c68e2e7cd37b',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150417T184857Z:b3e180c8-82ce-4b1c-a359-c68e2e7cd37b',
  date: 'Fri, 17 Apr 2015 18:48:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/southeastasia/operations/b904f2da-5358-4148-8ab0-1b9146e7250a?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2ace8bb4-eca5-471e-a74e-89ab82d0180c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31895',
  'x-ms-correlation-request-id': 'b3e180c8-82ce-4b1c-a359-c68e2e7cd37b',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150417T184857Z:b3e180c8-82ce-4b1c-a359-c68e2e7cd37b',
  date: 'Fri, 17 Apr 2015 18:48:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/microsoft.network/publicIPAddresses/armpublicipnew4401/?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armpublicipnew4401\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew4401\",\r\n  \"etag\": \"W/\\\"0601e964-c956-427a-a7e3-199c2af0e503\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip19897\",\r\n      \"fqdn\": \"dnstestpubip19897.southeastasia.cloudapp.azure.com.\",\r\n      \"reverseFqdn\": \"dnstestpubip2386.southeastasia.cloudapp.azure.com.\"\r\n    }\r\n  },\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '650',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"0601e964-c956-427a-a7e3-199c2af0e503"',
  'x-ms-request-id': 'b24eb71a-4de3-4df7-b1ed-135db90dfb9d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31911',
  'x-ms-correlation-request-id': '5f63afe7-aa65-484f-b15e-216cb1b25172',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150417T184857Z:5f63afe7-aa65-484f-b15e-216cb1b25172',
  date: 'Fri, 17 Apr 2015 18:48:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/microsoft.network/publicIPAddresses/armpublicipnew4401/?api-version=2014-12-01-preview')
  .reply(200, "{\r\n  \"name\": \"armpublicipnew4401\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew4401\",\r\n  \"etag\": \"W/\\\"0601e964-c956-427a-a7e3-199c2af0e503\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip19897\",\r\n      \"fqdn\": \"dnstestpubip19897.southeastasia.cloudapp.azure.com.\",\r\n      \"reverseFqdn\": \"dnstestpubip2386.southeastasia.cloudapp.azure.com.\"\r\n    }\r\n  },\r\n  \"location\": \"southeastasia\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '650',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"0601e964-c956-427a-a7e3-199c2af0e503"',
  'x-ms-request-id': 'b24eb71a-4de3-4df7-b1ed-135db90dfb9d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31911',
  'x-ms-correlation-request-id': '5f63afe7-aa65-484f-b15e-216cb1b25172',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150417T184857Z:5f63afe7-aa65-484f-b15e-216cb1b25172',
  date: 'Fri, 17 Apr 2015 18:48:57 GMT',
  connection: 'close' });
 return result; }]];