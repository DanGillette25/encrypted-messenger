let testString = "This is a test string.  We will begin by encrypting and decrypting it."

let checkIfDivisible = (num) => {
  const div = parseInt(num /3)
  return num === div * 3
}

let encryptMsg = (msg) => {

  let arr = []

  for (let i = 0; i < msg.length; i++) {
    if (checkIfDivisible(i) && i > 0){
      arr.push(msg[i - 2])
      arr[i - 2] = msg[i]
    } else {
      arr.push(msg[i])
    }
}

return arr.toString().replace(/,/g,"");

}

let encryptedStr = encryptMsg(testString)
console.log(encryptedStr)
let decryptedStr = encryptMsg(encryptedStr)
console.log(decryptedStr)
