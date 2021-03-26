function getMostMoney(arr) {
  let money = 0
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i+1] > arr[i]) {
      money += (arr[i+1] - arr[i])
    }
  }
  return money
}

console.log(getMostMoney([7,1,5,3,6,4]))