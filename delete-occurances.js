function deleteNth(arr, n){
	const result = []
	const numbers = {}
	for (let i = 0; i < arr.length; i++) {
	  const key = arr[i]
	  if (!numbers[key]) {
		numbers[key] = 1
	  } else {
		numbers[key] += 1
	  }
  
	  if(numbers[key] <= n) {
		result.push(key)
	  }
	}
  
	return result
  }
  