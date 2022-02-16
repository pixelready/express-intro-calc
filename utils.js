const {BadRequestError} = require("./expressError");

/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  // if the conversion isn't successful, throw a BadRequestError and will
  // be handled in your route

  let strNumsArray = strNums.split(",");
  numsArray = strNumsArray.map(numStr => Number(numStr));
  for (let i = 0; i < numsArray.length; i++) {
    if (Number.isNaN(numsArray[i])) {
      throw new BadRequestError(`${strNumsArray[i]} is not a number!`);
    }
  }
  console.log("numsArray ", numsArray);
  return numsArray;
}

module.exports = {
  convertStrNums
};
