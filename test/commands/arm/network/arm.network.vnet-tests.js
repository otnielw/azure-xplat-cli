/**
* Copyright (c) Microsoft.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var should = require('should');
var util = require('util');
var testUtils = require('../../../util/util');
var CLITest = require('../../../framework/arm-cli-test');
var testprefix = 'arm-network-vnet-tests';
var vnetPrefix = 'xplatTestVnet';
var createdGroups = [];
var groupName,location,
	groupPrefix = 'xplatTestGCreatevnet',
	dnsAdd='8.8.8.8',dnsAdd1='8.8.4.4',AddPrefix='10.0.0.0/12';
var requiredEnvironment = [{
    name: 'AZURE_VM_TEST_LOCATION',
    defaultValue: 'eastus'
}];

describe('arm', function () {
    describe('network', function () {
    var suite,
		retry = 5;

		before(function (done) {
			suite = new CLITest(testprefix, requiredEnvironment);
			suite.setupSuite(function() {
				location = process.env.AZURE_VM_TEST_LOCATION;
				groupName = suite.generateId(groupPrefix, createdGroups, suite.isMocked);
				vnetPrefix = suite.generateId(vnetPrefix, createdGroups, suite.isMocked);
				done();
		   });
		});
		after(function (done) {
			deleteUsedGroup(function() {
				suite.teardownSuite(done);
			});
		});
		beforeEach(function (done) {
			suite.setupTest(done);
		});
		afterEach(function (done) {
			suite.teardownTest(done);
		});

		describe('vnet', function () {
		
			it('create', function (done) {
				createGroup(function(){
					var cmd = util.format('network vnet create %s %s %s -a %s -t priority=low;size=small -d %s', groupName, vnetPrefix,location, AddPrefix,dnsAdd).split(' ');
					testUtils.executeCommand(suite, retry, cmd, function (result) {
						result.exitStatus.should.equal(0);
						done();
					});
				});
			});
			it('set', function (done) {
				 var cmd = util.format('network vnet set %s %s -d %s --no-tags --json', groupName, vnetPrefix,dnsAdd1).split(' ');
				 testUtils.executeCommand(suite, retry, cmd, function (result) {
					 result.exitStatus.should.equal(0);
					 done();
				 });
			});
			it('show', function (done) {
				var cmd = util.format('network vnet show %s %s --json', groupName, vnetPrefix).split(' ');
				testUtils.executeCommand(suite, retry, cmd, function (result) {
					result.exitStatus.should.equal(0);
					var allresources = JSON.parse(result.text);
					allresources.name.should.equal(vnetPrefix);
					done();
				});
			});
			it('list', function (done) {
				var cmd = util.format('network vnet list %s --json',groupName).split(' ');
				testUtils.executeCommand(suite, retry, cmd, function (result) {
					result.exitStatus.should.equal(0);
					var allResources = JSON.parse(result.text);
					allResources.some(function (res) {
					return res.name === vnetPrefix;
					}).should.be.true;
					done();
				});
			});
			it('delete', function (done) {
				var cmd = util.format('network vnet delete %s %s --quiet', groupName, vnetPrefix).split(' ');
				testUtils.executeCommand(suite, retry, cmd, function (result) {
					result.exitStatus.should.equal(0);
					done();
				});
			});
		  
		});
		
		function createGroup(callback) {
			var cmd = util.format('group create %s --location %s --json', groupName, location).split(' ');
			testUtils.executeCommand(suite, retry, cmd, function (result) {
				result.exitStatus.should.equal(0);
				callback();
			});
		}
		function deleteUsedGroup(callback) {
			if (!suite.isPlayback()) {
				var cmd = util.format('group delete %s --quiet', groupName).split(' ');
				testUtils.executeCommand(suite, retry, cmd, function (result) {
					result.exitStatus.should.equal(0);
					callback();
				});
			}
			else
				callback();
		}
	
	});
});