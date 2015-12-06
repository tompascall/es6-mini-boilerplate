import echo from '../src/first';

describe('first test for testing es6 framework', () => {
  it('should echo imput', () => {
    sinon.stub(window.console, 'log').withArgs('hello');
    echo('hello');
    expect(window.console.log.called).to.equal(true);
    window.console.log.restore();
  });
});
