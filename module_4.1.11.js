// let upperLimit = prompt("Enter upper limit:");
// let lowerLimit = prompt("Enter lower limit:");

// if (
//   !Number.isNaN(upperLimit) &&
//   !Number.isNaN(lowerLimit) &&
//   upperLimit > lowerLimit
// ) {
//   for (let i = upperLimit; i >= lowerLimit; i -= 10) {
//     console.log(i);
//   }
// } else {
//   console.log(
//     "Invalid input. Please enter valid numbers with upper limit greater than lower limit.",
//   );
// }

// let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];
// for (number of numbers) {
//   console.log(number);
// }
// for (number of numbers) {
//   if (number % 2 === 0) {
//     console.log(number);
//   }
// }
// for (number of numbers) {
//   if (number > 10 && number < 60) {
//     console.log(number);
//   }
// }

let askUser = prompt("Enter a movie name");
let rating = prompt("Enter a imdb rating for the movie");
let movies = [{ title: askUser, imdb: rating }];
if (movies != null) {
  console.log(movies);
}
if (movies != null && movies.imdb < 7) {
  for (let i = 0; i < movies.length; i++) {
    console.log(movies[i].title);
    console.log(movies[i].imdb);
  }
}
if (movies <= 7) {
  console.log(movies[0].title + " " + movies[0].imdb);
}
