let playerAction = process.argv[process.argv.length - 1];
console.log(playerAction);

let random = Math.random() * 3;
let computerAction = '';
if (random < 1) {
  computerAction = 'rock';
} else if (random > 2) {
  computerAction = 'scissor';
} else {
  computerAction = 'paper';
}

if (computerAction === playerAction) {
  console.log('平局');
} else if (
  (computerAction === 'rock' && playerAction === 'paper') ||
  (computerAction === 'scissor' && playerAction === 'rock') ||
  (computerAction === 'paper' && playerAction === 'scissor')
) {
  console.log('你赢了');
} else {
  console.log('你输了');
}
