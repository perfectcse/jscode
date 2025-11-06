function countVowels(str) {
  let vowels = "aeiouAEIOU"; // vowels
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}
console.log(countVowels("Visha")); // Output: 2
