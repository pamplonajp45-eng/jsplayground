let JavaScriptProgrammingBooks = [
  {
    title: "Speaking JavaScript",
    author: "Axel Rauschmayer",
    pages: 460,
  },
  {
    title: "Programming JavaScript Applications",
    author: "Eric Elliott",
    pages: 254,
  },
  {
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    pages: 352,
  },
];
let OtherBooks = [
  {
    title: "Learning JavaScript Design",
    author: "Patterns",
    pages: 254,
  },
];
JavaScriptProgrammingBooks.push(OtherBooks);
console.log(JavaScriptProgrammingBooks.length);
console.log(JavaScriptProgrammingBooks[1].title);
