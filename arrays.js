function addElementToBeginningOfArray(arrayTake, elementAdd){
  arrayTake.unshift(elementAdd)
  return (arrayTake)
}


function destructivelyAddElementToBeginningOfArray(arrayTake, arrayAdd){
  arrayTake = arrayAdd
}

var num = [1, 2, 3, 4]
addElementToBeginningOfArray(num, 303)


destructivelyAddElementToBeginningOfArray(num,1)