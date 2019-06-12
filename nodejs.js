require('dotenv').config();

// .bash_profile
let userName = process.env.accountId;
let authToken = process.env.authToken;
let path = process.env.PATH;
let privateKey1 = process.env.PK1;
let privateKey2 = process.env.PK2;

console.log('Secrets for bash_profile');
console.log(userName);
console.log(authToken);
console.log(path);
console.log(privateKey1);
console.log(privateKey2);

// .env
let test = process.env.test;
let DB_URL = process.env.DB_URL;

console.log('Secrets for .env');
console.log(test);
console.log(DB_URL)