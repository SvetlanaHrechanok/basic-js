module.exports = function countCats(matrix) {

  let arr = [].concat(...matrix);
  let numberCats = arr.filter(item => item == "^^").length;

  return numberCats;
};
