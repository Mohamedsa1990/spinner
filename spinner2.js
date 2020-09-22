// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);


// setTimeout(() => {
//   process.stdout.write('\r|   \n');
// }, 900);


// refractored code 

let x = 1;
const chars = ["|", "/", "-", "\\", "|", "\n"]
for (char of chars) {
  const c = char;
  setTimeout(() => {
    process.stdout.write('\r' + c);
  }, x += 200)
};