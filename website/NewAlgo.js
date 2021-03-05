var searchMatrix = function(matrix, target, i, j) {
  //recursion
  if (i === undefined) {
    i = 0;
    j = 0;
  }
  console.log('Matrix = ', matrix[0])
  if (matrix[i][j] === target) {
      console.log('hi')
      return true;
  }
  if (matrix[i][j] === undefined) {
      return;
  }

  //if both are smaller,k travel both paths bottom and right
  if (matrix[i+1][j] > matrix[i][j] && matrix[i+1][j] > target) {
      searchMatrix(matrix, target, i+1, j)
  }
   if (matrix[i][j+1] > matrix[i][j] && matrix[i][j+1] > target) {
      searchMatrix(matrix, target, i, j+1)
  }
};

console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 5))
console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 20))

