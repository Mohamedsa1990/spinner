// refractored code 

let x = 1;
const chars = ["|", "/", "-", "\\", "|", "\n"]
for (const char of chars) {
  setTimeout(() => {
    process.stdout.write('\r' + char);
  }, x += 200)
};