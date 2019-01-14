describe('functions', () => {
  let sayItCalled = false;
  const sayIt = (greeting, name, punctuation) => {
    sayItCalled = true;
    return `${greeting}, ${name}${punctuation || '!'}`;
  };

  beforeEach(() => {
    sayItCalled = false;
  });

  it('you should be able to use an array as arguments when calling a function', () => {
    const result = functionsAnswers.argsAsArray(sayIt, ['Hello', 'Ellie', '!']);
    expect(result).to.eql('Hello, Ellie!');
    expect(sayItCalled).to.be.ok;
  });

  it('you should be able to return a function from a function', () => {
    expect(functionsAnswers.functionFunction('Hello')('world')).to.eql('Hello, world');
    expect(functionsAnswers.functionFunction('Hai')('can i haz funxtion?')).to.eql('Hai, can i haz funxtion?');
  });
});
