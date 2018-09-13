/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
let count=0;
for (let i=0; i<preferences.length; i++){

  let firstSpichonees = preferences[i];
  let secondSpichonees = preferences[[i]-1];
  let thirdSpichonees = preferences[[[i]-1]-1];

  if (firstSpichonees != secondSpichonees && secondSpichonees!=thirdSpichonees && thirdSpichonees==(i+1) ){

count++
  }
}
return count/3;
} ;