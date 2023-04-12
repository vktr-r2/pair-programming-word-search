const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    
    const transpose = function (array) {
      //Accept array of arrays (matrix)  //DONE
      //Declare new empty array of arrays
      let matrix = []
      // Find out how many columns we need
      const columns = array.length;
      const rows = array[0].length;
      //console.log("Rows then columns", rows, columns);
      
      for (let i = 0; i < rows; i++) {
        let rowHolder = []
        for (let j = 0; j < columns; j++){  //Loop handling columns
          rowHolder.push(array[j][i])
          //console.log(matrix[j])
        }
        matrix.push(rowHolder)
      }
      return matrix;
    };
    
    const transposeArray = transpose(letters);

    const verticalJoin = transposeArray.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) return true;
    }
    // console.log(transposeArray);
    return false;
  };
  
  module.exports = wordSearch;