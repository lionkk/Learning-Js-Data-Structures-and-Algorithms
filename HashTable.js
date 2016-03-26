function HashTable() {
  var table = [];

  // bad hash function
  var loseloseHashCode = function(key) {
    var hash = 0;
    for (var i = 0; i < key.length; ++i) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  };

  // djb2 hash function
  var djb2HashCode = function(key) {
    var hash = 5381;
    for (var i = 0; i < key.length; ++i) {
      hash = hash *33 + key.charCodeAt(i);
    }
    return hash % 1013;
  };

  this.put = function(key, value) {
    var position = djb2HashCode(key);
    console.log(position + ' - ' + key);
    table[position] = value;
  };

  this.get = function(key) {
    return table[djb2HashCode(key)];
  };

  this.remove = function(key) {
    table[djb2HashCode(key)] = undefined;
  };
}
