var Fibonacci = function () {

  this.sumFromZero = function (num) {
    var x = 0;
    var y = 1;

    if (num === 0) {
      return 0;
    } else if (num === 1) {
      return 1;
    } else {
      return calculate(x, y, num);
    }
  };

  this.sum = function (prev, next, num) {
    if ((prev > next) || (prev + next) <= 0) {
      return 0;
    }
    if (num === 0) {
      return prev;
    } else if (num === 1) {
      return next;
    } else {
      return calculate(prev, next, num);
    }
  };

  var calculate = function (x, y, num) {
    for (var i = 0; i < num; i++) {
      x = x + y;
      y = x - y;
    }
    return y;
  };
};


//test
var fib = new Fibonacci();
console.log(fib.sum(5,7,15));
