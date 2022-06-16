const { wallet } = require("nanocurrency-web");

const possibilities = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F"];

const seedToSearch = "";
const addressToFind = "";


String.prototype.replaceAt = function (index, replacement) {
  return this.substring(0, index) + replacement + this.substring(index + replacement.length);
};

console.time("findWallet");

let isFound = false;
for (let i = 0; i < seedToSearch.length; i++) {
  for (let ii = 0; ii < possibilities.length; ii++) {
    for (let x = 0; x < seedToSearch.length; x++) {
      // Don't replace characters for same indexes
      if (i === x) continue;

      for (let xx = 0; xx < possibilities.length; xx++) {
        const possibleSeed = seedToSearch.replaceAt(i, possibilities[ii]).replaceAt(x, possibilities[xx]);
        const possibleWallet = wallet.legacyAccounts(possibleSeed);

        console.log(`possibleSeed: ${possibleSeed}`);
        console.log(`Public address: ${possibleWallet[0].address}`);

        if (possibleWallet[0].address === addressToFind) {
          isFound = true;
          console.log("🎉~~~~~~~~~~~~~~~~~~~~~~~~~~~🎉");
          console.log("Seed:", possibleSeed);
          console.log("Wallet:", possibleWallet);
          console.log("🎉~~~~~~~~~~~~~~~~~~~~~~~~~~~🎉");
          break;
        }
      }
      if (isFound) {
        break;
      }
    }
    if (isFound) {
      break;
    }
  }
  if (isFound) {
    break;
  }
}

console.timeEnd("findWallet");
