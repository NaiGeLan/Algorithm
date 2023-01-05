/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  for(let i = 0; i < address.length; i++){
    const temp = address[i];
      if(temp === "."){
          address[i] = "[.]"
      }
  }
  return address
};
const address = "1.1.1.1"
const res = defangIPaddr(address)
console.log(res);
