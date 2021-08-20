const transpose = function (matrix) {
  let resultArr = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let newArr = [];
    for (let j = 0; j < matrix.length; j++) {
      newArr.push(matrix[j][i]);
    }
    resultArr.push(newArr);
  }
  return resultArr;
};

module.exports = transpose;