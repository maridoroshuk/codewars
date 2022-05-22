function incrementString (string) {
	const word = string.replace(/[^a-zA-Z]/g, "")
	const num = string.replace(/[^0-9]/g, "")
  
	if (num == "000") {
	  return word + "001"
	} else if (num.length === 1) {
	  console.log(string)
	  return word + "00" + num
	} else if (num) {
	  return word + (parseInt(num)+1)
	} else {
	  return word + 1 
	}
  }