const totalIntegers = function(data) {
  //1. validate if input is array or plain object
  if (typeof data !== 'object' || data === null || typeof data === 'function') {
    return undefined;
  }

  let count = 0;

  //2. iterate through collection of data
  for (let value of Object.values(data)) {
    //3. check if current number is an integr
    if (Number.isInteger(value)) {
        count++;
    }
    //4. Recursive steup
    else if (typeof value === 'object' && value !== null) {
        count += totalIntegers(value);
    }
  }
  return count
};
  
// Do not edit below this line
module.exports = totalIntegers;
