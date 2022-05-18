function findUniq(arr) {
	let result
	let hash = {}
	
	for (let i = 0; i < arr.length; i++) {
	  const num = arr[i]
	  if(!hash[num]) {
		hash[num] = 1
	  } else {
		hash[num] +=1
	  }
	}
  
	for (const key in hash) {
		if (hash[key] === 1) {
		result = key
		return +result
	  } 
	}
  }
  