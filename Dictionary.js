function MyDictionary() {
  var items = {};

  this.has = function(key) {
    return items.hasOwnProperty(key);
  };

  this.set = function(key, value) {
    items[key] = value;
  };

  this.remove = function(key) {
    if (this.has(key)) {
      delete items[key];
      return true;
    }
    return false;
  };

  this.get = function(key) {
    return this.has(key) ? items[key] : undefined;
  };

  this.values = function() {
    var values = [];
    for (var key in items) {
      if (this.has(key)) {
        values.push(items[key]);
      }
    }
    return values;
  };

  this.keys = function() {
    var keys = [];
    for (var key in items) {
      keys.push(key);
    }
    return keys;
  };

  this.getItems = function() {
    return items;
  };

  this.size = function() {
    var count = 0;
    for (var key in items) {
      if (items.hasOwnProperty(key)) {
        count++;
      }
    }
    return count;
  };

  this.clear = function() {
    items = {};
  };

}



//test
var dic = new MyDictionary();
dic.set(1, 'jack');
console.log(dic.has(1));
console.log(dic.getItems());
