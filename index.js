function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
    for (let key in collection) {
      callback(collection[key]);
    }
  }

  return collection;
}

function myMap(collection, callback) {
  const result = [];
  if (Array.isArray(callback)) {
    for (let i = 0; i < collection.length; i++) {
      result.push(callback(collection[i]));
    }
  } else {
    for (let key in collection) {
      result.push(callback(collection[key]));
    }

    return result;
  }
}

function myReduce(collection, callback, intialValue) {
  let accumulater;
  let number = false;

  if (intialValue != undefined) {
    accumulater = intialValue;
    number = true;
  }

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (number === false) {
        accumulater = collection[i];
        number = true;
      } else {
        accumulater = callback(accumulater, collection[i]);
      }
    }
  } else {
    for (let key in collection) {
      if (number === false) {
        accumulater = collection[key];
        number = true;
      } else {
        accumulater = callback(accumulater, collection[key]);
      }
    }
  }
  return accumulater;
}

function myFind(collection, predicate) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
  } else {
    for (let key in collection) {
      if (predicate(collection[key])) {
        return collection[key];
      }
    }
  }
  return undefined;
}

function myFilter(collection, predicate) {
  const results = [];

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        results.push(collection[i]);
      }
    }
  } else {
    for (let key in collection) {
      if (predicate(collection[key])) {
        results.push(collection[key]);
      }
    }
  }
  return results;
}

function mySize(collection) {
  let count = 0;
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      count++;
    }
  } else {
    for (let key in collection) {
      count++;
    }
  }
  return count;
}

function myFirst(array, n) {
  if (n === undefined || n === null) {
    return array[0];
  }

  if (n <= 0) {
    return [];
  }
  return array.slice(0, n);
}

function myLast(array, n) {
  if (n === undefined || n === null) {
    return array[array.length - 1];
  }

  if (n <= 0) {
    return [];
  }
  return array.slice(array.length - n);
}

function myKeys(object) {
  const keys = [];

  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  return keys;
}

function myValues(object) {
  console.log(values, "VALUES");
  const values = [];

  for (let key in object) {
    values.push(object[key]);
  }
  return values;
}
