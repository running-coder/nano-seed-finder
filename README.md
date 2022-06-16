# Nano Seed Finder

Have you been in the situation where you wrote your nano seed down but made a typo? Now you can't find back your wallet because the seed doesn't match it. This tool iterate over each characters of your "wrong" seed and tries to find a match based on the public `nano_` address you specify.

By default:

- the script loops for replacing 2 characters but you can tweak it to loop through more if you think you've made more typos
- the script only looks at the derived `nano_` address at the index 0 of the generated seed, you may also tweak it if you're looking for another index

<img width="640" alt="image" src="https://user-images.githubusercontent.com/19352322/174072060-78a10772-b935-45fa-8ac5-a2d7a55f9e02.png">

## Installation

```javascript

npm install
```

Once your dependencies are installed, open `seed-finder.js` and fill in your information

```javascript
const seedToSearch = "MY_64_CHARACTER_LENGTH_SEED_THAT_IS_WRONG";
```

```javascript
const addressToFind = "MY_NANO_PUBLIC_ADDRESS_THAT_I_KNOW_IS_CORRECT";
```

## Running

Once those 2 variables are filled, run this command in your terminal, it will then start searching for the correct seed

```
node seed-finder.js
```
