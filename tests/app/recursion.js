if ( typeof window === 'undefined' ) {
  require('../../app/recursion');
  var expect = require('chai').expect;
  var _ = require('underscore');
}

describe('recursion', function() {
  var fileData = {
    dir : 'app',
    files : [
      'index.html',
      {
        dir : 'js',
        files: [
          'main.js',
          'app.js',
          'misc.js',
          {
            dir : 'vendor',
            files : [
              'jquery.js',
              'underscore.js'
            ]
          }
        ]
      },
      {
        dir : 'css',
        files : [
          'reset.css',
          'main.css'
        ]
      }
    ]
  };

  it('you should be able to return a list of files from the data', function() {
    var result = recursionAnswers.listFiles(fileData);
    expect(result.length).to.eql(8);
    expect(result.indexOf('index.html') > -1).to.be.ok;
    expect(result.indexOf('main.js') > -1).to.be.ok;
    expect(result.indexOf('underscore.js') > -1).to.be.ok;
  });

  it('you should be able to return a list of files in a subdir', function() {
    var result = recursionAnswers.listFiles(fileData, 'js');
    expect(result.length).to.eql(5);
    expect(result.indexOf('main.js') > -1).to.be.ok;
    expect(result.indexOf('underscore.js') > -1).to.be.ok;
  });

  it('you should be able to return the nth number in a fibonacci sequence', function() {
    expect(recursionAnswers.fibonacci(2)).to.eql(1);
    // TODO: The exoect() below is wrong fibonacci(6)) should equal 5. Send a PR to Rebecca Murphey's Repo
    expect(recursionAnswers.fibonacci(6)).to.eql(8);
  });
});
