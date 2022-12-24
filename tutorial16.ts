/* lecture 16 Object literals Part 2 */

let ln = "last name"
let person = {
  "first name": "Chandler",
  [ln]: "Bing"
}
console.log(person) // {
  // first name : 'Chandler',
  // last name : 'Bing'}