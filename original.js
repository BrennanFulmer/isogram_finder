// my answer

function isIsogram(str){
  formatted = str.toLowerCase().split('')
  unique = [...new Set(formatted)];

  if (formatted.length == unique.length) {
    return true
  } else {
    return false
  }
}

console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("isogram")); // true
console.log(isIsogram("aba")); // false
console.log(isIsogram("moOse")); // false
console.log(isIsogram("isIsogram")); // false
console.log(isIsogram("")); // true
