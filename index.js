//We are gonna be using built in methods like Map, filter, find, reduce, Etc
//We are gonna be using callbacks - including calling a callback from within a function
///Passing a callback to a function and passing data between functions and callbacks.

//The programming approach in this lab is an example of function programming (FP)
//At its core its programming in which data manipulation occurs through functions that return the result of manipulation without modifying the state of the og obj.

// const myEach = function(collection, callback) {
   // collection.forEach((element, index) => {
    //    / callback(element, index, collection)
   // })
 // }
 function myEach (collection, callback) { //Function myEach takes two params, a collection which is an array, and a callback.
    if (Array.isArray(collection)) { ///remember array.isArray reliable way to check if a value is an array
        collection.forEach((element, index) => {
            callback(element, index, collection)
    
    })
 }

    else if (typeof collection === 'object' && collection !== null) {
        Object.entries(collection).forEach(([key, value]) => {
            callback(value, key, collection)
    })
}

    return collection

}
     ///takes two parameters collection(either an object or an arry) and a callback
                                        ///We want to return the original collection
                                        //What data are we taking in and what do we need to put out?
                                        //Behavior iterates over the collection of elements, passing each element in turn to the callback function, and returns the og, unmodified collection
                                      



    function myMap(collection, callback) { 
        const mapArray = Array.isArray(collection) ? collection : Object.values(collection)
        return mapArray.map((element, index) => {
        return callback(element, index, collection)
  })
}
    // function myMap(collection, callback) {
    //    const mapArray = []
    
//console.log(mapArray, "MAP ARRRAAYYY")

  //collection.forEach((element, index) => {

    //const newMapArray = callback(element, index, collection)(console.log(callback, "CALLBACK"))
    //mapArray.push(newMapArray)(console.log(newMapArray, "NEW ARRAY"))
  //})

  //return mapArray;

//two params a collection either an object or an array
                    //returns a new array
                    //produces a new array of values by mapping each value in collection through a transformation function, callback returns the new array w/out modifying the original



function myReduce(collection, callback, initialValue) {
                                                                // Convert objects to an array of values, leave arrays as they are
  const targetArray = Array.isArray(collection) ? collection : Object.values(collection)

  if (initialValue === undefined) {
    return targetArray.reduce((acc, value, index) => {
                                                                 // Pass the original collection context to the callback
      return callback(acc, value, index, collection);
    })
  }

                                                                // Case WHERE an initial value IS provided
  return targetArray.reduce((acc, value, index) => {
                                                                // Pass the original collection context to the callback
    return callback(acc, value, index, collection);
  }, initialValue);
}


//we are gonna use reduce here, so we will have acc added to our params, 3 params.
                      //for the acc its "optional" to have a starting value 
                      //"walks" through a collection and combines its values into one final result
                      
                      




function myFind(collection, predicate) {
    for (let key in collection) {
        if (predicate(collection[key])) {
            return collection[key]
        }
    }
    return undefined
}                                       ///two parameters, a collection(object or array), predicate(a callback function that returns true or false)
                                        // return a single value
                                        //looks through each value in the collection and returns the first one that passes a truth test or undefined if no values pass the test
                                        //function can return as soon as it finds an acceptable element

function myFilter(collection, predicate) {
    const results = []

    if(Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                results.push(collection[i])
            }
        }
    } else {
        for (let key in collection) {
            if (predicate(collection[key])) {
                results.push(collection[key])
            }
        }
    }
    return results
} ///two parameters, a collection(object or array), predicate(a callback function that returns true or false)
                                            // returns an array
                                             //looks through each value in the collection, returning an array of all of the values that pass a truth test, if no matches are found it should return an empty array


function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length
    }
    return Object.keys(collection).length
}                                               //one parameter, collection(either an object or an array)
                                                //returns an int
                                                //returns the number of values in a collection



function myFirst(array, n) {
    if (n === undefined || n === null) {
        return array[0]
    }

    if (n <= 0) {
      return[]
    }
    return array.slice(0,n)
}                 
                                                //two params, an array, an integer(optional)
                                                //returns a single value OR an array
                                                //returns the first element of an array, passing n will return the first n elements of the array



function myLast(array, n) {
    if (n === undefined || n === null) {
        return array[array.length - 1]
    }

    if (n <= 0) {
      return[]
    }
    return array.slice(array.length -n)
}                                               //two params, an array, an integer(optional)
                                                //returns the first element of an array, passing n will return the first n elements of the array




    // const user = {
   //     name: 'Bobert',
    //    age: 101,
//    /     isOld: true
 //   }   
//    / const getKeys = (obj) => {
//   /      return Object.keys(obj)
 //   }    
    
  //  console.log(getKeys(user))
                                
    function myKeys(object) {
       return Object.keys(object)
    }
        
    

                                             //one param, an object
                                            //returns an array
                                         //retrieves all the names of the objects enumerable properties



function myValues(object) {
    return Object.values(object)            // these are built in object "constuctors"
}                                          //one param, an object
                                          //returns an array 
                                         //returns all the values of the objects properties