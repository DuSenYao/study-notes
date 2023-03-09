const game = require('./lib.cjs');

// let playerAction = process.argv[process.argv.length - 1];
// console.log(playerAction);

let count = 0;
process.stdin.on('data', e => {
  const playerAction = e.toString().trim();

  const result = game(playerAction);
  console.log(result);

  if (result === -1) {
    count += 1;
  }
  if (count === 3) {
    console.log('我不玩了');
    process.exit();
  }
});
