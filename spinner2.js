// setTimeout(() => {
//   process.stdout.write("\r| ");
// }, 100);

// setTimeout(() => {
//   process.stdout.write("\r/ ");
// }, 300);

// setTimeout(() => {
//   process.stdout.write("\r- ");
// }, 500);

// setTimeout(() => {
//   process.stdout.write("\r\\ ");
// }, 700);

//misssion: Refactor the logic to remove the repeated setTimeout statements.

//below code : deplaying them in console in time interval.
// const spinner = ["|", "/", "-", "\\"];

// let currentIndex = 0;

// const spin = () => {
//   process.stdout.write(`${spinner[currentIndex]}    `);
//   currentIndex = (currentIndex + 1) % spinner.length; //for 'looping back':when you reach last element, modulo helps go back to the 1st element.
//   // if (currentIndex === spinner.length - 1) {
//   //   currentIndex = 0;
//   // }
// };

// const intervalSpinner = setInterval(spin, 200);

// setTimeout(() => {
//   clearInterval(intervalSpinner);
//   console.log(); //adding newline after stopping animation
// }, 3000); //after 3 seconds, stop the animation.
const spinner = ["|", "/", "-", "\\"];
let currentIndex = 0;

const spin = () => {
  process.stdout.write(`\r${spinner[currentIndex]}`);
  currentIndex = (currentIndex + 1) % spinner.length;
  // if (currentIndex === 0) {
  //   clearInterval(intervalId);
  //   console.log(); // Move to the next line after displaying all characters
  // }     ////if you want only one cycle, you can add this block.
};
const intervalId = setInterval(spin, 200);

//Larry's approach stretch below:
// const spinner = ["|", "/", "-", "\\"];
// let currentIndex = 0;
// let cyclesCompleted = 0; // Counter for completed cycles

// const spin = () => {
//   process.stdout.write(`\r${spinner[currentIndex]}`);
//   currentIndex = (currentIndex + 1) % spinner.length;

//   if (currentIndex === 0) {
//     // Increment the cyclesCompleted when a full cycle is done.
//     cyclesCompleted++;

//     // Check if a certain number of cycles have been completed
//     if (cyclesCompleted === 10) { // Stops after 10 cycles.
//       clearInterval(intervalId);
//       console.log();
//     }
//   }
// };

// const intervalId = setInterval(spin, 200);
