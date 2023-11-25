// setTimeout(() => {
//   process.stdout.write("\r| ");
// }, 100);

// setTimeout(() => {
//   process.stdout.write("\r/ "); //Spaces are added after the character so that the cursor moves far enough away from our animation
// }, 300);

// setTimeout(() => {
//   process.stdout.write("\r- ");
// }, 500);

// setTimeout(() => {
//   process.stdout.write("\r\\ "); // Need to escape the backslash since it's a special character.
// }, 700);
//Now, if you actually want to include a backslash in your string,
// you have to escape the escape character itself.
// That's why you write `\\` – the first backslash escapes the second one
// so that it is treated as a literal backslash in the string.

const spinner = ["|", "/", "-", "\\"];
let delay = 100;

const spin = () => {
  for (const char of spinner) {
    setTimeout(() => {
      process.stdout.write(`\r${char}   `);
    }, delay);
    delay += 200; // Adjust the delay as needed
  }
};

// Run the spinner continuously
setInterval(spin, spinner.length * 100);
