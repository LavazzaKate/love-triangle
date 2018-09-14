/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
let count=0;
for (let i=0; i<preferences.length; i++){

 var firstSpichonees = preferences[i];
  var secondSpichonees = preferences[firstSpichonees-1];
  var thirdSpichonees = preferences[secondSpichonees-1];

  if (firstSpichonees != secondSpichonees && secondSpichonees !=thirdSpichonees && thirdSpichonees == (i+1) ){

  
count++
  }
}
return count/3;
} ;