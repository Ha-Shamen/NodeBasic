const chai = require('chai');
const { greet } = require('../src/utils/utils');
const expect = chai.expect;

describe('Example Test Suite', () => {
  it('should pass a simple test', () => {
    expect(2 + 2).to.equal(4);
  });

  it('should test greet', () => {
    let reply = greet('name');
    expect(reply).to.equal('Hello, name!');
  });

  it('should fail a simple test', () => {
    expect(2 + 2).to.equal(5);
  });
});