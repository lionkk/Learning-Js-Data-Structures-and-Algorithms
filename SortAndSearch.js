"use strict";

function ArrayList() {
  var array = [];

  this.insert = function (item) {
    array.push(item);
  };

  this.toString = function () {
    return array.join();
  };

  // SORT
  this.bubbleSort = function () {
    let length = array.length;
    for (let i = 0; i < length; ++i) {
      for (let j = 0; j < length - 1 - i; ++j) {
        if (array[j] > array[j+1]) {
          swap(j, j+1);
        }
      }
    }
  };

  this.selectionSort = function () {
    let length = array.length;
    let indexMin;
    for (let i = 0; i < length - 1; ++i) {
      indexMin = i;
      for (let j = i; j < length; ++ j) {
        if (array[indexMin] > array[j]) {
          indexMin = j;
        }
      }
      if (i !== indexMin) {
        swap(i, indexMin);
      }
    }
  };

  var swap = function(index1, index2) {
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
  };

  this.insertionSort = function () {
    let length = array.length;
    let j;
    let temp;
    for (let i = 1; i < length; ++i) {
      j = i;
      temp = array[i];
      while (j > 0 && array[j-1] > temp) {
        array[j] = array[j-1];
        j--;
      }
      array[j] = temp;
    }
  };

  this.mergeSort = function () {
    array = mergeSortRec(array);
  };

  var mergeSortRec = function (array) {
    let length = array.length;
    if (length === 1) {
      return array;
    }

    let mid = Math.floor(length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid, length);

    return merge(mergeSortRec(left), mergeSortRec(right));
  };

  var merge = function (left, right) {
    let result = [];
    let il = 0;
    let ir = 0;

    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
        result.push(left[il++]);
      } else {
        result.push(right[ir++]);
      }
    }

    while (il < left.length) {
      result.push(left[il++]);
    }

    while (ir < right.length) {
      result.push(right[ir++]);
    }

    return result;
  };

  this.quickSort = function () {
    quick(array, 0, array.length - 1);
  };

  var quick = function (array, left, right) {
    let index;
    if (array.length > 1) {
      index = partition(array, left, right);
      if (left < index - 1) {
        quick(array, left, index - 1);
      }
      if (index < right) {
        quick(array, index, right);
      }
    }
  };

  var partition = function (array, left, right) {
    let pivot = array[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
      while (array[i] < pivot) {
        i++;
      }
      while (array[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swapQuickSort(array, i, j);
        i++;
        j--;
      }
    }
    return i;
  };

  var swapQuickSort = function (array, index1, index2) {
    let aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
  };


  // SEARCH
  this.sequentialSearch = function (item) {
    for (let i = 0; i < array.length; ++i) {
      if (item === array[i]) {
        return i;
      }
    }
    return -1;
  };

  this.binarySearch = function (item) {
    this.quickSort();

    let low = 0;
    let high = array.length - 1;
    let mid;
    let element;

    while (low <= high) {
      mid = Math.floor((low + high) / 2);
      element = array[mid];
      if (element < item) {
        low = mid + 1;
      } else if (element > item) {
        high = mid - 1;
      } else {
        return mid;
      }
    }
    return -1;
  };

}


//test
function createNonSortedArray(size) {
  var array = new ArrayList();
  for (let i = size; i > 0; --i) {
    array.insert(i);
  }
  return array;
}

var arr = createNonSortedArray(100000);

console.log(arr.binarySearch(1100));
