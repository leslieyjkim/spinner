const animatingSymbol = [
  { char: "|", delayTime: 100 },
  { char: "/", delayTime: 300 },
  { char: "-", delayTime: 500 },
  { char: "\\", delayTime: 700 },
  { char: "|", delayTime: 900 },
  { char: "/", delayTime: 1100 },
  { char: "-", delayTime: 1300 },
  { char: "\\", delayTime: 1500 },
  { char: "|", delayTime: 1700 },
];

for (const objKey of animatingSymbol) {
  setTimeout(() => {
    process.stdout.write(`\r${objKey.char}`);
  }, objKey.delayTime);
}
