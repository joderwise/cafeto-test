exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  // Location

  indexOf: function (arr, item) {
    if (Array.prototype.indexOf) {
      return arr.indexOf(item);
    } else {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
          return i;
        }
      }
      return -1;
    }
  },

  // Sum

  sum: function (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  },

  // Remove all instances 

  remove: function (arr, item) {
    return arr.filter(function (val) {
      return val !== item;
    });
  },

  removeWithoutCopy: function (arr, item) {
    // Modifies the ORIGINAL array.
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        // The splice() method changes the content of an array by removing existing elements and/or adding new elements.
        arr.splice(i, 1);
        i--; // move index pointer back to removed item index.
      }
    }
    return arr;
  },

  // Add item to the end

  append: function (arr, item) {
    arr.push(item);
    return arr;
  },

  // Remove the last item

  truncate: function (arr) {
    arr.pop();
    return arr;
  },

  // Add item to the begining

  prepend: function (arr, item) {
    arr.unshift(item);
    return arr;
  },

  // Remove the first item

  curtail: function (arr) {
    arr.shift();
    return arr;
  },

  // Concat the arrays

  concat: function (arr1, arr2) {
    return arr1.concat(arr2);
  },

  // Add an item anywhere

  insert: function (arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  // Count the occurences

  count: function (arr, item) {
    // Using reduce()
    return arr.reduce(function (n, val) {
      return n + (val === item);  // Coercion converts 'true' to 1
    }, 0);
  },

  // Find the duplicates

  duplicates: function (arr) {
    // Using reduce()
    return arr.reduce(function (dupes, val, i) {
      if (arr.indexOf(val) !== i && dupes.indexOf(val) === -1) {
        dupes.push(val);
      }
      return dupes;
    }, []);
  },

  // Square each number

  square: function (arr) {
    // Modifies the current array
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i] * arr[i];
    }
    return arr;
  },

  // Find all occurrences

  findAllOccurrences: function (arr, target) {
    var ret = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        ret.push(i);
      }
    }
    return ret;
  }
};
