
// You should implement your task here.

module.exports = function towelSort (matrix=[]) {
  if(!matrix.length){
    return []
  }

  let result=[]

  matrix.forEach((element,index) => {
    
  if(index%2==0){

  result.push(...element)}
  else{
    console.log(index,"even",element)
    let aaa=element.reverse()
    result.push(...aaa)
  }
  
  });
  console.log(result)
  return result
//   return result.sort((a,b)=>a-b);
}

function towelSort (matrix) {
  console.log('a',Array.isArray(matrix))
  if(!matrix.length){
    return []
  }

  let result=[]
console.log(matrix)
  matrix.forEach((element,index) => {
    
  if(index%2==0){
    console.log(index,"odd",element,index%2==0)
  result.push(...element)}
  else{
    console.log(index,"even",element)
    let aaa=element.reverse()
    result.push(...aaa)
  }
  
  });
  console.log(result)
  return result
}

console.log(towelSort([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]))



