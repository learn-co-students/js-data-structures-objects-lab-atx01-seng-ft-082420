// Write your solution in this file!
const driver = {}
function updateDriverWithKeyAndValue(driver, key, value){
    return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue (driver, key, value) {
   
    driver[key] = value;
   
    return driver;
  }

  function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    return driver
  }

  function deleteFromDriverByKey(driver, key) {
//     const driver = { key: "value" };

// SyntaxError: /Users/pikusaurus/Development/code/js-data-structures-objects-lab-atx01-seng-ft-082420/index.js: Identifier 'driver' has already been declared (17:10)
    const updatedDriver = Object.assign({}, driver);
    delete updatedDriver[key];
    return updatedDriver;
    //I initially forgot return keyword.
  }

  
