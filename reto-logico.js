const names = ['Mariana', 'Alejandra', 'Juan', 'Pablo']

function findLongestWord(array) {
  let longestWord = ''

  array.forEach(function (word) {
    if (word.length > longestWord.length) {
      longestWord = word
    }
  })

  return longestWord
}

const longestWord = findLongestWord(names)
console.log(longestWord)
