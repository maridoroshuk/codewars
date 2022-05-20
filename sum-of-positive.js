function positiveSum(arr) {
	const pos = arr.filter(val => val > 0)
  
	if (pos.length > 0) {
	  const result = pos.reduce(function (sum, cur) {
		return sum + cur 
	  })
	  return result
	} else {
	  return 0
	}
  } 