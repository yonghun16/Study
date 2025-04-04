/* If */

function isPositive(number) {
  if (number > 0) {
    return '양수'
  } else if (number < 0){
    return '음수'
  } else {
    return '0'
  }
}

// Switch 
switch (number) {
  case 1:
    return '양수'
  case -1:
    return '음수'
  default:
    return '0'
}
