// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    console.log('update')
    return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    console.log('overwrite')
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key) {
    console.log('hide')
    const newObj = Object.assign({}, driver)
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    console.log('delete')
    delete driver[key]
    return driver
}