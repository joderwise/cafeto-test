// functionsAnswers = {
//   /**
//    * Calls a function fn with the arguments supplied in an array arr
//    * 
//    * Example: argsAsArray(Math.max, [1, 2, 3, 4, 5, 6])
//    * should be 6, the same as Math.max(1, 2, 3, 4, 5, 6);
//    * 
//    * @param {Function} fn - A function to be called
//    * @param {[]} arr - An array of values to be passed to fn
//    * @returns Whatever fn would return
//    */
//   argsAsArray: function argsAsArray(fn, arr) {

//   },

//   *
//    * Makes a function, that when called, will return the string
//    * of text beginning with str + ', ';
//    * 
//    * Example: functionFunction('Hello') should return a function that takes
//    * 1 argument, and returns 'Hello, ' + that 1 argument. So
//    * functionFunction('Hello')('world') should be 'Hello, world'.
//    * 
//    * @param {String} str - a string that will appear at the beginning of 
//    * any string returned by the function returned from functionFunction.
//    * @returns {Function} A function that takes 1 argument, and returns a string
//    * that begins with str + ', ' + that 1 argument.
   
//   functionFunction: function functionFunction(str) {

//   },
// };

exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray: function (fn, arr) {
    // 'this' is null here.
    return fn.apply(null, arr);
  },

  speak: function (fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function (str) {
    return function (arg) {
      return str + ', ' + arg;
    }
  },

  makeClosures: function (arr, fn) {
    var ret = [];

    var makeFn = function (val) {
      return function () {
        return fn(val);
      };
    };

    for (var i = 0; i < arr.length; i++) {
      ret.push(makeFn(arr[i]));
    }

    return ret;
  },

  partial: function (fn, str1, str2) {
    return function (str3) {
      return fn.call(null, str1, str2, str3);
    }
  },

  useArguments: function () {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }

    return sum;
  },

  callIt: function (fn) {
    // Arguments are passed with the fn, so I splice it
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    fn.apply(null, args);
  },

  partialUsingArguments: function (fn) {
    // Arguments are passed with the fn, so I splice it.
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function () {
      var moreArgs = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, moreArgs);
    };
  },

  // Help by: https://medium.com/@kevincennis/currying-in-javascript-c66080543528
  // He creates a chain of partially applied functions that resolves with a VALUE.
  curryIt: function (fn) {
    function getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount) {
      return function (currentArgument) {
        accumulatedArguments.push(currentArgument);

        var allArgumentsProvided = accumulatedArguments.length === expectedArgumentsCount;

        if (allArgumentsProvided) {
          return fn.apply(null, accumulatedArguments);
        } else {
          return getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount);
        }
      };
    }

    return getArgumentAccumulator([], fn.length);
  }
};

