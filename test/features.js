var app = require("http-server").createServer();
var Browser = require('zombie');
var assert = require('chai').assert;

describe('Title page', function() {
  before(function() {
    server = app.listen(3000);
    browser = new Browser({ site: 'http://localhost:3000' });
  });
  beforeEach(function(done) {
    browser.visit('/', done);
  });
  it('has a index page', function() {
    browser.assert.status(200);
  });
  it('displays a title', function() {
    browser.assert.text('title', 'To Do List');
  });
  it('displays a to-do list', function() {
    browser.fill('#task', 'Eat breakfast');
    browser.pressButton('#Add');
    browser.fill('#task', 'Get dressed');
    browser.pressButton('#Add');
    assert.include(browser.text('li'), 'Eat breakfastGet dressed');
  });
});
