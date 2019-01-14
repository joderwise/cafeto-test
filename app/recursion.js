exports = (typeof window === 'undefined') ? global : window;

// TODO: Take this one: https://www.codecademy.com/courses/javascript-lesson-205/0/1
exports.recursionAnswers = {
  
  listFiles: function (data, dirName) {
    var listOfFiles = [];
    var dirs = [];

    processDir(data);

    function processDir(dir) {
      var files = dir.files;

      dirs.push(dir.dir);

      for (var i = 0; i < files.length; i++) {
        file = files[i];
        if (typeof file === 'string') {
          if (!dirName || dirs.indexOf(dirName) > -1) {
            listOfFiles.push(files[i]);
          }
        } else {
          processDir(files[i]);
        }
      }

      // One you reach the end of the current directory tree - Pop it!
      dirs.pop();
    }

    return listOfFiles;
  },

  // For more check https://medium.com/@scottibiscotti1/calculating-the-nth-fibonacci-number-in-javascript-c3656250f626
  // NOTE: Here 'n' is base zero -- kinda like in arrays.
  fibonacci: function (n) {
    // Naive recursive approach
    function fib(n) {
      return n < 2 ? n : fib(n - 1) + fib(n - 2);
    }
    return fib(n)
  },
  
};
