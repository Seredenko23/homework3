const phoneKeyboard = {
  0: ' ',
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z']
}

function getMessage (message) {
  const messArr = message.toLowerCase().split('')
  const result = []
  for (let i = 0; i < messArr.length; i++) {
  	for (const key in phoneKeyboard) {
  		if (phoneKeyboard[key].includes(messArr[i])) {
  			const obj = {}
  			obj[key] = phoneKeyboard[key].indexOf(messArr[i]) + 1
  			result.push(obj)
  			break
  		}
  	}
 	}
  return result
}
