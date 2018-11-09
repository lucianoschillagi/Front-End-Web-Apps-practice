// Array Iterators

// The filter method
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7
});

const smallNumbers = randomNumbers.filter(number => {
  return number < 250;
});
console.log(smallNumbers);
console.log(longFavoriteWords);
