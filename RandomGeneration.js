const randomNumber  = require("./RandomNumber.js");

//import randomNumber from './RandomNumber.js';

console.log(randomNumber);

const numRange = {
  minNum: 97,
  maxNum: 122,
};

const randomStrLength = 5;

const generateRandomNumber = (minNum, maxNum) =>
  Math.floor(randomNumber() * (maxNum - minNum + 1) + minNum);

const generateRandomChar = (minNum, maxNum) =>
  //Math.random().toString(36).substring(minNum, maxNum);
  String.fromCharCode(generateRandomNumber(minNum, maxNum));

const generateRandomString = (minNum, maxNum, strLength) => {
  let randomString = "";
  for (let i = 0; i < strLength; i++) {
    //randomString += characters.charAt(Math.floor(Math.random() * characters.length);
    randomString += generateRandomChar(minNum, maxNum);
  }
  return randomString;
};

const getUUID = () =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (character) => {
    let randomValue = (randomNumber() * 16) | 0,
      value = character == "x" ? randomValue : (randomValue & 0x3) | 0x8;
    return value.toString(16);
  });

const main = () => {
  console.log(
    "Random Number : " + generateRandomNumber(numRange.minNum, numRange.maxNum)
  );

  console.log(
    "Random Character : " + generateRandomChar(numRange.minNum, numRange.maxNum)
  );

  console.log(
    "Random String : " +
      generateRandomString(numRange.minNum, numRange.maxNum, randomStrLength)
  );

  console.log("Random UUID : " + getUUID());
};

main();
