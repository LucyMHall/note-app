var assert = {
  isInstanceOf: function(expected, actual) {
    if (!(actual instanceof expected)) {
      throw new Error("Assertion failed: " + (typeof actual) + " is not an instance of " + expected.name);
    } else {
      console.log("Passed: " + (typeof actual) + " is an instance of " + expected.name)
    }
  },
  isEqual: function(expected, actual) {
    if (!(expected == actual)) {
      throw new Error("Failed " + expected + " is not equal to " + actual)
    } else {
      console.log("Passed: " + expected + " is equal to " + actual)
    }
  },
  isNotEqual: function(expected, actual) {
    if ((expected == actual)) {
      throw new Error("Failed " + expected + " is equal to " + actual)
    } else {
      console.log("Passed: " + expected + " is not equal to " + actual)
    }
  },
  describe: function(description) {
    console.log(description);
  }
}
