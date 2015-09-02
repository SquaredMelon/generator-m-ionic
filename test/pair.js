'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('M:generators/pair', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/pair'))
      .withGenerators([ // configure path to subgenerators
        path.join(__dirname, '../controller'),
        path.join(__dirname, '../template'),
      ])
      .withArguments('name')
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'app/main/controllers/name-ctrl.js',
      'test/karma/main/name-ctrl.spec.js',
      'app/main/templates/name.html'
    ]);
  });
});
