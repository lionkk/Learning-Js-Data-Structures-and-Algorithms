function MySet() {
  var items = {};

  this.has = function(value) {
    return items.hasOwnProperty(value);
  };

  this.add = function(value) {
    if (!this.has(value)) {
      items[value] = value;
      return true;
    }
    return false;
  };

  this.remove = function(value) {
    if (this.has(value)) {
      delete items[value];
      return true;
    }
    return false;
  };

  this.clear = function() {
    items = {};
  };

  this.size = function() {
    var count = 0;
    for (var prop in items) {
      if (items.hasOwnProperty(prop)) {
        count++;
      }
    }
    return count;
  };

  this.values = function() {
    var keys = [];
    for (var key in items) {
      keys.push(key);
    }
    return keys;
  };

  this.union = function(otherSet){
    var unionSet = new MySet();

    var values = this.values();
    for (var i=0; i<values.length; ++i) {
      unionSet.add(values[i]);
    }

    values = otherSet.values();
    for (var n=0; n<values.length; ++n) {
      unionSet.add(values[n]);
    }

    return unionSet;
  };

  this.intersection = function(otherSet) {
    var intersetionSet = new MySet();

    var values = this.values();
    for (var i=0; i<values.length; ++i) {
      if (otherSet.has(values[i])) {
        intersetionSet.add(values[i]);
      }
    }

    return intersetionSet;
  };

  this.difference = function(otherSet) {
    var differenceSet = new MySet();

    var values = this.values();
    for (var i=0; i<values.length; ++i) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i]);
      }
    }

    return differenceSet;
  };

  this.subSet = function(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    } else {
      var values = this.values();
      for (var i=0; i<values.length; ++i) {
        if (!otherSet.has(values[i])) {
          return false;
        }
      }
      return true;
    }
  };
}


//test
var s = new MySet();
s.add(1);
s.add(2);
var b = new MySet();
b.add(9);
b.add(2);
console.log(b.union(s).values());
