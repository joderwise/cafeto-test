describe('strings', () => {
  it('you should be able to reduce duplicate characters to a desired minimum', () => {
    expect(stringsAnswers.reduceString('aaaabbbb', 2)).to.eql('aabb');
    expect(stringsAnswers.reduceString('xaaabbbb', 2)).to.eql('xaabb');
    expect(stringsAnswers.reduceString('aaaabbbb', 1)).to.eql('ab');
    expect(stringsAnswers.reduceString('aaxxxaabbbb', 2)).to.eql('aaxxaabb');
  });

  it('you should be able to reverse a string', () => {
    const inputStrings = [
      'abc',
      'i am a string of characters',
      'A man, a plan, a canal: Panama',
    ];
    const outputStrings = [
      'cba',
      'sretcarahc fo gnirts a ma i',
      'amanaP :lanac a ,nalp a ,nam A',
    ];

    inputStrings.forEach((str, index) => {
      const result = stringsAnswers.reverseString(str);
      expect(result).to.eql(outputStrings[index]);
    });
  });
});
